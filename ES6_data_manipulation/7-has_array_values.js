/* eslint-disable linebreak-style */
const hasValuesFromArray = (aSet, anArr) => {
  const arr = Array.from(aSet);

  return arr.includes(...anArr);
};

export default hasValuesFromArray;
