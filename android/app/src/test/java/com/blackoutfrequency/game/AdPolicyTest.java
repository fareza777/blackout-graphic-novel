package com.blackoutfrequency.game;
import org.junit.Test;
import java.util.Collections;
import static org.junit.Assert.*;

public class AdPolicyTest {
    private final String key = "run-12345678:chapter-2";
    @Test public void startupReadingAndEndingCannotTriggerAds() {
        AdPolicy policy = new AdPolicy(1000, 0, Collections.emptySet());
        assertFalse(policy.canShowInterstitial(key, 180999));
        assertTrue(policy.canShowInterstitial(key, 181000));
        for (String invalid : new String[]{"startup", "run-123:chapter-1", "run-123:chapter-4", "run-123:page-2"}) assertFalse(policy.canShowInterstitial(invalid, 999999));
    }
    @Test public void shownChapterAndRewardedShareTheCooldown() {
        AdPolicy policy = new AdPolicy(1000, 0, Collections.emptySet());
        policy.shown(key, 200000);
        assertFalse(policy.canShowInterstitial(key, 999999));
        assertFalse(policy.canShowInterstitial("run-12345678:chapter-3", 439999));
        assertTrue(policy.canShowInterstitial("run-12345678:chapter-3", 440000));
        policy.shown(null, 450000);
        assertFalse(policy.canShowInterstitial("run-12345678:chapter-3", 689999));
    }
    @Test public void savedBreaksSurviveRelaunchAndClockReversalIsConservative() {
        AdPolicy policy = new AdPolicy(1000, 0, Collections.emptySet()); policy.shown(key, 200000);
        AdPolicy restored = new AdPolicy(250000, policy.lastShownAt(), policy.seen());
        assertFalse(restored.canShowInterstitial(key, 999999));
        assertFalse(restored.canShowInterstitial("run-12345678:chapter-3", 100));
        assertTrue(restored.canShowInterstitial("run-another:chapter-2", 500000));
    }
}
