package com.blackoutfrequency.game;

import android.content.Context;
import android.net.Uri;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.RuntimeEnvironment;
import org.robolectric.Shadows;
import org.robolectric.annotation.Config;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Collections;
import static org.junit.Assert.*;

@RunWith(RobolectricTestRunner.class)
@Config(sdk = 34)
public class OfflineAppTest {
    private final Context context = RuntimeEnvironment.getApplication();
    private String read(String path) throws Exception { try (InputStream input = context.getAssets().open(path)) { return new String(input.readAllBytes(), StandardCharsets.UTF_8); } }

    @Test public void completeBundledGameHasEveryVerifiedAsset() throws Exception {
        JSONObject bundle = new JSONObject(read("www/bundle-info.json"));
        assertEquals("en", bundle.getString("defaultLanguage"));
        assertEquals(110, bundle.getInt("illustrations")); assertEquals(353, bundle.getInt("voiceClips"));
        JSONArray files = bundle.getJSONArray("files");
        for (int index = 0; index < files.length(); index++) {
            JSONObject file = files.getJSONObject(index);
            byte[] bytes; try (InputStream input = context.getAssets().open("www/" + file.getString("path"))) { bytes = input.readAllBytes(); }
            assertEquals(file.getString("path"), file.getLong("bytes"), bytes.length);
            byte[] digest = MessageDigest.getInstance("SHA-256").digest(bytes); StringBuilder hex = new StringBuilder(); for (byte value : digest) hex.append(String.format("%02x", value));
            assertEquals(file.getString("path"), file.getString("sha256"), hex.toString());
        }
        assertEquals(353, context.getAssets().list("www/assets/voice/en").length);
        assertTrue(read("www/index.html").contains("<html lang=\"en\">"));
        assertFalse(read("www/game.js").contains("api.deepgram.com"));
    }
    @Test public void audioCanSeekWithoutAConnection() throws Exception {
        AssetServer server = new AssetServer(context);
        String file = context.getAssets().list("www/assets/voice/en")[0];
        Uri uri = Uri.parse("https://" + AssetServer.HOST + "/assets/www/assets/voice/en/" + file);
        byte[] original; try (InputStream input = context.getAssets().open("www/assets/voice/en/" + file)) { original = input.readAllBytes(); }
        WebResourceResponse response = server.respond(uri, Collections.singletonMap("Range", "bytes=5-19"));
        assertEquals(206, response.getStatusCode()); assertEquals("audio/mpeg", response.getMimeType());
        assertEquals("bytes 5-19/" + original.length, response.getResponseHeaders().get("Content-Range"));
        try (InputStream input = response.getData()) { assertArrayEquals(Arrays.copyOfRange(original, 5, 20), input.readAllBytes()); }
        response = server.respond(uri, Collections.singletonMap("Range", "bytes=-12"));
        try (InputStream input = response.getData()) { assertArrayEquals(Arrays.copyOfRange(original, original.length - 12, original.length), input.readAllBytes()); }
        response = server.respond(uri, Collections.singletonMap("Range", "bytes=" + original.length + "-"));
        assertEquals(416, response.getStatusCode());
    }
    @Test public void onlyTrustedLocalContentIsServed() {
        AssetServer server = new AssetServer(context);
        for (String url : new String[]{"https://example.com/", "file:///etc/passwd", "https://" + AssetServer.HOST + "/assets/www/../secret", "https://" + AssetServer.HOST + ".example.com/assets/www/index.html"}) assertEquals(403, server.respond(Uri.parse(url), Collections.emptyMap()).getStatusCode());
        assertEquals(404, server.respond(Uri.parse("https://" + AssetServer.HOST + "/assets/www/missing.html"), Collections.emptyMap()).getStatusCode());
        assertNotNull(server.respond(Uri.parse(AssetServer.START_URL), Collections.emptyMap()).getResponseHeaders().get("Content-Security-Policy"));
    }
    @Test public void androidWindowUsesOfflineOriginAndSafePersistentStorage() {
        MainActivity activity = Robolectric.buildActivity(MainActivity.class).setup().get();
        WebView view = activity.gameView();
        assertEquals(AssetServer.START_URL, Shadows.shadowOf(view).getLastLoadedUrl());
        assertTrue(view.getSettings().getJavaScriptEnabled()); assertTrue(view.getSettings().getDomStorageEnabled());
        assertFalse(view.getSettings().getAllowFileAccess()); assertFalse(view.getSettings().getAllowContentAccess());
        assertFalse(view.getSettings().getMediaPlaybackRequiresUserGesture());
        activity.onPause();
        assertTrue(Shadows.shadowOf(view).getLastEvaluatedJavascript().contains("blackout-native-pause"));
        activity.finish();
    }
}
