/** Coverts rem to pixels
 * 
 * @param {number} rem Number of rem units to convert to pixels
 * 
 * @returns {number}
 */
export const remToPx = (rem: number): number => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}