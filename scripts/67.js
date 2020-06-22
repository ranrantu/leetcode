/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const arrayA = [...a].map(item => Number(item));
  const arrayB = [...b].map(item => Number(item));
  let startA = arrayA.length - 1;
  let startB = arrayB.length - 1;
  let curry = 0;
  let sumArray = [];
  while (startA >= 0 || startB >= 0) {
    const valueA = startA >= 0 ? arrayA[startA] : 0;
    const valueB = startB >= 0 ? arrayB[startB] : 0;
    if (valueA + valueB + curry > 1) {
      sumArray.unshift((valueA + valueB + curry) % 2);
      curry = 1;
    } else {
      sumArray.unshift(valueA + valueB + curry);
      curry = 0;
    }
    startA--;
    startB--;
  }
  if (curry !== 0) {
    sumArray.unshift(1);
  }
  return sumArray.join('');
};

console.log(
  addBinary('11', '1')
);
