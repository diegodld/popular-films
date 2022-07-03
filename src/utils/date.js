const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const formatUnit = (unit) => (unit <= 9 ? `0${unit}` : unit);

const dateFormat = (date) => {
  const dateFormated = new Date(date);
  const day = dateFormated.getDate();
  const month = dateFormated.getMonth();
  const year = dateFormated.getFullYear();
  return `${formatUnit(day)} de ${months[month]} de ${year}`;
};

export { dateFormat };
