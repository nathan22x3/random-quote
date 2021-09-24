/**
 * @description Generate random number in given range
 */
export const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
