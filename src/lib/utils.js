export const dateCalculate = (otherDate = '') => {
  const currentDate = new Date();
  const otherYear = Number(otherDate.substring(0, 4));
  const otherMonth = Number(otherDate.substring(5, 7));
  const otherDay = Number(otherDate.substring(8, 10));
  const otherHour = Number(otherDate.substring(11, 13));
  const otherMinute = Number(otherDate.substring(14, 16));
  const currentYear = currentDate.getFullYear();
  const currentMonth = (currentDate.getMonth() + 1);
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  if (currentYear - otherYear > 0) return `${currentYear - otherYear}년전`;
  if (currentMonth - otherMonth > 0) return `${currentMonth - otherMonth}달전`;
  if (currentDay - otherDay > 1) return `${currentDay - otherDay}일전`;
  if (currentDay - otherDay === 1) {
    if (24 - otherHour + currentHour > 23) return '1일전';
    return `${24 - otherHour + currentHour}시간전`;
  }
  if (currentHour - otherHour > 0) return `${currentHour - otherHour}시간전`;
  if (currentMinute - otherMinute > 0) return `${currentMinute - otherMinute}분전`;
  return null;
};

export const viewCalculate = (viewCount) => {
  if (viewCount >= 100000) return `${Math.floor(viewCount / 10000)}만`;
  if (viewCount >= 10000) return `${Math.floor(viewCount / 1000) / 10}만`;
  if (viewCount >= 1000) return `${Math.floor(viewCount / 100) / 10}천`;
  return `${viewCount}`;
};

export const transDate = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  return `${year}. ${month}. ${day}`;
};

export const likeCalculate = (count) => {
  if (count >= 10000) {
    return `${Math.floor(count / 1000) / 10}만`;
  }
  if (count >= 1000) {
    return `${Math.floor(count / 100) / 10}천`;
  }
  return `${count}`;
};
