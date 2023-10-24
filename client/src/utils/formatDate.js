export default function formatDate(date, later) {
  if (!date) return;
  let originalDate = new Date(date);

  if (later) {
    const threeDaysLater = new Date(originalDate);
    threeDaysLater.setDate(originalDate.getDate() + 3);
    return new Intl.DateTimeFormat("en-US").format(new Date(threeDaysLater));
  }
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
}
