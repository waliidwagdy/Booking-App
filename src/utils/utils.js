const millisecondsPerDay = 1000 * 60 * 60 * 24;
const dayDiff = (day1, day2) => {
  const timeDiff = Math.abs(day2.getTime() - day1.getTime());
  return Math.ceil(timeDiff / millisecondsPerDay);
};
const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export { dayDiff, cloneObj };
