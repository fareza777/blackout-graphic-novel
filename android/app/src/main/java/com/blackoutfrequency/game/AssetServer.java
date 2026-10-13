package com.blackoutfrequency.game;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import android.webkit.WebResourceResponse;
import androidx.webkit.WebViewAssetLoader;
import java.io.ByteArrayInputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Collections;
import java.util.Map;

/** Serves only bundled game content. No server, network permission or API key is needed. */
final class AssetServer {
    static final String HOST = "appassets.androidplatform.net";
    static final String START_URL = "https://" + HOST + "/assets/www/index.html?source=android";
    private final Context context;
    private final WebViewAssetLoader loader;
    AssetServer(Context context) {
        this.context = context.getApplicationContext();
        loader = new WebViewAssetLoader.Builder().addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this.context)).build();
    }
    static boolean isGameUri(Uri uri) {
        String path = uri.getPath();
        return "https".equals(uri.getScheme()) && HOST.equals(uri.getHost()) && path != null && path.startsWith("/assets/www/") && !path.contains("..") && !path.contains("\\");
    }
    WebResourceResponse respond(Uri uri, Map<String, String> requestHeaders) {
        if (!isGameUri(uri)) return empty(403, "Forbidden");
        String path = uri.getPath().substring("/assets/".length());
        try {
            if (path.startsWith("www/assets/voice/en/") && path.endsWith(".mp3")) return audio(path, requestHeaders);
            WebResourceResponse response = loader.shouldInterceptRequest(uri);
            if (response == null || response.getData() == null) return empty(404, "Not Found");
            Map<String, String> headers = new LinkedHashMap<>();
            if (response.getResponseHeaders() != null) headers.putAll(response.getResponseHeaders());
            headers.put("Cache-Control", "no-store");
            headers.put("X-Content-Type-Options", "nosniff");
            if (path.endsWith(".html")) headers.put("Content-Security-Policy", "default-src 'self' data: blob:; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; object-src 'none'; frame-src 'none'; base-uri 'none'; form-action 'none'");
            response.setResponseHeaders(headers);
            return response;
        } catch (IOException error) { return empty(404, "Not Found"); }
    }
    private WebResourceResponse audio(String path, Map<String, String> requestHeaders) throws IOException {
        long size;
        try (AssetFileDescriptor descriptor = context.getAssets().openFd(path)) { size = descriptor.getLength(); }
        String header = null;
        for (Map.Entry<String, String> entry : requestHeaders.entrySet()) if ("Range".equalsIgnoreCase(entry.getKey())) header = entry.getValue();
        ByteRange range;
        try { range = ByteRange.parse(header, size); }
        catch (IllegalArgumentException error) {
            WebResourceResponse response = empty(416, "Range Not Satisfiable");
            response.setResponseHeaders(Collections.singletonMap("Content-Range", "bytes */" + size));
            return response;
        }
        InputStream input = context.getAssets().open(path);
        long remaining = range.start;
        while (remaining > 0) { long skipped = input.skip(remaining); if (skipped == 0) { if (input.read() == -1) { input.close(); throw new IOException("Unexpected EOF"); } skipped = 1; } remaining -= skipped; }
        InputStream bounded = new FilterInputStream(input) {
            long left = range.length();
            @Override public int read() throws IOException { if (left <= 0) return -1; int value = super.read(); if (value != -1) left--; return value; }
            @Override public int read(byte[] data, int offset, int length) throws IOException { if (length == 0) return 0; if (left <= 0) return -1; int read = in.read(data, offset, (int) Math.min(length, left)); if (read > 0) left -= read; return read; }
        };
        Map<String, String> headers = new LinkedHashMap<>();
        headers.put("Content-Length", Long.toString(range.length()));
        headers.put("Accept-Ranges", "bytes");
        headers.put("Cache-Control", "no-store");
        if (range.partial) headers.put("Content-Range", "bytes " + range.start + "-" + range.end + "/" + size);
        return new WebResourceResponse("audio/mpeg", null, range.partial ? 206 : 200, range.partial ? "Partial Content" : "OK", headers, bounded);
    }
    private static WebResourceResponse empty(int status, String reason) { return new WebResourceResponse("text/plain", "UTF-8", status, reason, Collections.singletonMap("Cache-Control", "no-store"), new ByteArrayInputStream(new byte[0])); }
}
