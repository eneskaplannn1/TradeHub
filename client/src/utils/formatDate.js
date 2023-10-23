export default function formatDate(date) {
  if (!date) return;
  return new Intl.DateTimeFormat("fr-CA").format(new Date(date));
}
