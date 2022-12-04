export const useDate = (date) => {
  const newDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const resultDate = newDate.toLocaleDateString('zh-TW', options);
  return resultDate;
}
