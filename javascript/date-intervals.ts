export function getIntervalsBetweenDates(
  startDate: Date,
  endDate: Date,
  intervalLength: number
): { intervalStart: Date; intervalEnd: Date }[] {
  if (intervalLength < 1) {
    return [];
  }
  let tempDate = new Date(startDate);
  const intervals: { intervalStart: Date; intervalEnd: Date }[] = [];
  while (tempDate < endDate) {
    let nextDate = new Date(tempDate);
    nextDate.setDate(nextDate.getDate() + intervalLength);
    if (nextDate > endDate) {
      nextDate = new Date(endDate);
    }
    intervals.push({
      intervalStart: new Date(tempDate),
      intervalEnd: nextDate,
    });
    tempDate = new Date(nextDate);
    tempDate.setDate(tempDate.getDate());
  }
  return intervals;
}
