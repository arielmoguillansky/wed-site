export function isDateInPast(date) {
  const now = new Date();
  return date.getTime() < now.getTime();
}
