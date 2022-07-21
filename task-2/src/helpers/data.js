export const formatData = (date) => {
  return date.toLocaleDateString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
// ДД.ММ.ГГГГ ЧЧ:ММ.
