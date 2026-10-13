package com.blackoutfrequency.game;
import android.content.Context;
import android.content.SharedPreferences;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.RuntimeEnvironment;
import org.robolectric.annotation.Config;
import static org.junit.Assert.*;

@RunWith(RobolectricTestRunner.class) @Config(sdk = 34)
public class RewardLedgerTest {
    @Test public void earnedRewardSurvivesProcessRecreationUntilSaveAcknowledgesIt() {
        SharedPreferences preferences = RuntimeEnvironment.getApplication().getSharedPreferences("reward-test", Context.MODE_PRIVATE);
        preferences.edit().clear().commit();
        RewardLedger first = new RewardLedger(preferences); String key = "hint:run-12345678:desk";
        assertTrue(first.recordEarned(key)); assertTrue(first.recordEarned(key));
        RewardLedger restored = new RewardLedger(preferences);
        assertEquals(1, restored.pending().size()); assertTrue(restored.pending().contains(key));
        restored.acknowledge(key); assertTrue(new RewardLedger(preferences).pending().isEmpty());
    }
    @Test public void cancelFailureAndInvalidReceiptDoNotCreateRewards() {
        SharedPreferences preferences = RuntimeEnvironment.getApplication().getSharedPreferences("reward-test-empty", Context.MODE_PRIVATE);
        preferences.edit().clear().commit(); RewardLedger ledger = new RewardLedger(preferences);
        assertTrue(ledger.pending().isEmpty());
        assertFalse(ledger.recordEarned("dismissed")); assertFalse(ledger.recordEarned("hint:invalid:desk"));
        ledger.acknowledge("hint:run-123:desk"); assertTrue(ledger.pending().isEmpty());
    }
}
