package com.blackoutfrequency.game;

import java.util.HashSet;
import java.util.Set;

/** Full-screen ads belong only at chapter boundaries, with a shared cooldown. */
final class AdPolicy {
    static final long WARMUP_MS = 180_000;
    static final long COOLDOWN_MS = 240_000;
    private final long startedAt;
    private final Set<String> seen;
    private long lastShownAt;

    AdPolicy(long startedAt, long lastShownAt, Set<String> seen) {
        this.startedAt = startedAt;
        this.lastShownAt = lastShownAt;
        this.seen = new HashSet<>(seen);
    }
    static boolean validBreak(String key) { return key != null && key.matches("run-[a-z0-9-]{1,64}:chapter-[23]"); }
    static boolean validReward(String key) { return key != null && key.matches("hint:run-[a-z0-9-]{1,64}:[a-z0-9-]{1,64}"); }
    boolean canShowInterstitial(String key, long now) {
        return validBreak(key) && !seen.contains(key) && now - startedAt >= WARMUP_MS
            && (lastShownAt == 0 || now - lastShownAt >= COOLDOWN_MS);
    }
    void shown(String key, long now) { if (validBreak(key)) seen.add(key); lastShownAt = now; }
    long lastShownAt() { return lastShownAt; }
    Set<String> seen() { return new HashSet<>(seen); }
}
