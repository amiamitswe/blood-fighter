export const dateConvertor = (date: any) => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  const day = dd < 10 ? "0" + dd : dd;
  const month = mm < 10 ? "0" + mm : mm;

  return day + "/" + month + "/" + yyyy;
};