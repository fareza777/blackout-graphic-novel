package com.blackoutfrequency.game;

import org.junit.Test;
import static org.junit.Assert.*;

public class ByteRangeTest {
    @Test public void fullFileAndClosedRange() {
        ByteRange full = ByteRange.parse(null, 100); assertFalse(full.partial); assertEquals(100, full.length());
        ByteRange range = ByteRange.parse("bytes=10-19", 100); assertTrue(range.partial); assertEquals(10, range.start); assertEquals(19, range.end); assertEquals(10, range.length());
    }
    @Test public void openAndSuffixRanges() {
        ByteRange open = ByteRange.parse("bytes=90-", 100); assertEquals(10, open.length());
        ByteRange suffix = ByteRange.parse("bytes=-12", 100); assertEquals(88, suffix.start); assertEquals(99, suffix.end);
        assertEquals(100, ByteRange.parse("bytes=-200", 100).length());
        assertEquals(99, ByteRange.parse("bytes=90-200", 100).end);
    }
    @Test public void rejectsInvalidOrUnsatisfiableRanges() {
        for (String input : new String[]{"bytes=100-", "bytes=20-10", "bytes=-0", "bytes=-", "bytes=0-2,8-9", "items=0-1", "bytes=999999999999999999999-"}) {
            assertThrows(input, IllegalArgumentException.class, () -> ByteRange.parse(input, 100));
        }
        assertThrows(IllegalArgumentException.class, () -> ByteRange.parse(null, 0));
    }
}
