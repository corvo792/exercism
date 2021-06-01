//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const planetMap = {
  "mercury": 0.2408467, // earth years
  "venus": 0.61519726,
  "earth": 1,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132
};

export const age = (planet, seconds) => {
  let spaceAge = seconds / 31557600 / planetMap[planet]
  return parseFloat(spaceAge.toFixed(2));
};