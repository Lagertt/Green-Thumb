export function getPromotionDays(count) {
  const curDate = new Date();
  let startDate = new Date();
  startDate.setDate(curDate.getDate() - count);
  return `${startDate.getDate()}.${startDate.getMonth() + 1} - ${curDate.getDate()}.${
    curDate.getMonth() + 1
  }`;
}
