import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { getIntervalsBetweenDates } from "./date-intervals.ts";

Deno.test(
  "date-intervals should make intervals with overlapping end dates",
  () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 15);
    const intervals = getIntervalsBetweenDates(startDate, endDate, 5);
    const first = intervals[0];
    const last = intervals[intervals.length - 1];
    assertEquals(first.intervalStart, startDate);
    assertEquals(last.intervalEnd, endDate);
    assertEquals(intervals.length, 3);
  }
);

Deno.test(
  "when start date and end date has a number of days not divisable with given interval there should be an extra interval",
  () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 15);
    const intervals = getIntervalsBetweenDates(startDate, endDate, 4);
    const first = intervals[0];
    const last = intervals[intervals.length - 1];
    assertEquals(first.intervalStart, startDate);
    assertEquals(last.intervalEnd, endDate);
    assertEquals(intervals.length, 4);
  }
);

Deno.test("given end date before start date gives an empty array", () => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() - 15);
  const intervals = getIntervalsBetweenDates(startDate, endDate, 4);
  assertEquals(intervals.length, 0);
});

Deno.test("given interval less than 1 should produce an empty array", () => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 15);
  const intervals = getIntervalsBetweenDates(startDate, endDate, 0);
  assertEquals(intervals.length, 0);
});
