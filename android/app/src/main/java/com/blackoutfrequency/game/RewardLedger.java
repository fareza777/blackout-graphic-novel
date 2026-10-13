package com.blackoutfrequency.game;

import android.content.SharedPreferences;
import org.json.JSONArray;
import java.util.HashSet;
import java.util.Set;

/** Persist before notifying JS; acknowledge only after the game save succeeds. */
final class RewardLedger {
    private final SharedPreferences preferences;
    RewardLedger(SharedPreferences preferences) { this.preferences = preferences; }
    synchronized boolean recordEarned(String request) {
        if (!AdPolicy.validReward(request)) return false;
        Set<String> pending = pending();
        pending.add(request);
        return preferences.edit().putStringSet("pending_rewards", pending).commit();
    }
    synchronized Set<String> pending() { return new HashSet<>(preferences.getStringSet("pending_rewards", new HashSet<>())); }
    synchronized String pendingJson() { return new JSONArray(pending()).toString(); }
    synchronized void acknowledge(String request) {
        Set<String> pending = pending(); pending.remove(request);
        preferences.edit().putStringSet("pending_rewards", pending).commit();
    }
}
