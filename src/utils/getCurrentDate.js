export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day}-${month}-${year}`;
};
