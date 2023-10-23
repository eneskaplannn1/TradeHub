export default function formatDate(date) {
  return new Intl.DateTimeFormat("fr-CA").format(new Date(date));
}
