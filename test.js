// Write a function
// that merges two sorted lists into a new sorted list.
// with O(n) complexity.

//  [1,4,6],[2,3,5] → [1,2,3,4,5,6].

function merge(fList, sList) {
  // gaurd
  if (fList.length === 0 || sList.length === 0) return false;

  let result = [];
  let fIndex = 0;
  let sIndex = 0;
  let fLength = fList.length;
  let sLength = sList.length;
  let tLength = fLength + sLength;

  for (let index = 0; index < tLength; index++) {
    if (
      (fList[fIndex] < sList[sIndex] || sIndex >= sLength) &&
      !(fIndex >= fLength)
    ) {
      result[index] = fList[fIndex];
      fIndex++;
    } else {
      result[index] = sList[sIndex];
      sIndex++;
    }
  }
  return result;
}

console.log(merge([1, 4, 6], [2, 3, 5]));
console.log(merge([1, 1, 1], [1, 3, 5]));
