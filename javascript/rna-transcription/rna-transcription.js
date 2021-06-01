//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rnaMap = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};

export const toRna = (strand) => {
  let rnaStrand = ""
  for (let index = 0; index < strand.length; index++) {
    for (const property in rnaMap) {
      if (strand[index] === property) {
        rnaStrand += rnaMap[property]
      }
    }
  }
  return rnaStrand
};
