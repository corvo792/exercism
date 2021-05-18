//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export const decodedValue = (bands) => {
  let newArray = bands.slice(0,2);
  return Number((newArray.map(item => COLORS.indexOf(item)).join('')));
};