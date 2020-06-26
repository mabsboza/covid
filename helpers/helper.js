export const monthString = (index) => {
  return [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ][index]
}

export const animateValue = (id, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    if (id === "total") {
      setTotal(Math.floor(progress * (end - start) + start));
    } else if (id === "recovered") {
      setRecovered(Math.floor(progress * (end - start) + start));
    } else if (id === "death") {
      setDeath(Math.floor(progress * (end - start) + start));
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};