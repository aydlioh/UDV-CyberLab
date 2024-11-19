export const getPercentage = (points: number, totalPoints: number) => {
  return Math.round((points / totalPoints) * 100);
};
