export const getFormattedDate = (d: string): string => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day + '.' + month + '.' + year}`;
};
