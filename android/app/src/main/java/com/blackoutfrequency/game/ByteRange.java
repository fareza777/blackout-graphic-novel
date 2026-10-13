package com.blackoutfrequency.game;

/** One RFC 9110 byte range, used by the offline audio player. */
final class ByteRange {
    final long start;
    final long end;
    final boolean partial;
    private ByteRange(long start, long end, boolean partial) { this.start = start; this.end = end; this.partial = partial; }
    long length() { return end - start + 1; }
    static ByteRange parse(String header, long size) {
        if (size <= 0) throw new IllegalArgumentException("Empty resource");
        if (header == null || header.trim().isEmpty()) return new ByteRange(0, size - 1, false);
        if (!header.matches("bytes=\\d*-\\d*")) throw new IllegalArgumentException("Unsupported range");
        String[] parts = header.substring(6).split("-", -1);
        try {
            long start, end = size - 1;
            if (parts[0].isEmpty()) {
                long suffix = Long.parseLong(parts[1]);
                if (suffix <= 0) throw new IllegalArgumentException("Empty suffix");
                start = Math.max(0, size - suffix);
            } else {
                start = Long.parseLong(parts[0]);
                if (!parts[1].isEmpty()) end = Math.min(end, Long.parseLong(parts[1]));
            }
            if (start < 0 || start >= size || end < start) throw new IllegalArgumentException("Unsatisfiable range");
            return new ByteRange(start, end, true);
        } catch (NumberFormatException error) { throw new IllegalArgumentException("Invalid range", error); }
    }
}
