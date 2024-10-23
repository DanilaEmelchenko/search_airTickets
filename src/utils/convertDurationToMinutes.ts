export const convertDurationToMinutes = (duration: any) => {
  const regex = /(\d+)\s*ч|(\d+)\s*мин/g;
  let totalMinutes = 0;
  let match;

  while ((match = regex.exec(duration)) !== null) {
    if (match[1]) {
      totalMinutes += parseInt(match[1]) * 60;
    }
    if (match[2]) {
      totalMinutes += parseInt(match[2]);
    }
  }

  return totalMinutes;
};
