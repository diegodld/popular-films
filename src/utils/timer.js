const formatUnit = (unit) => (unit <= 9 ? `0${unit}` : unit);

const timeFormat = (minutes) => {
  const hour = formatUnit(Math.floor(minutes / 60));
  const min = formatUnit(minutes % 60);
  return `${hour}h ${min}min`;
};

export { timeFormat };
