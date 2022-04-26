var iterations = 0;

const MergeSort = (array) => {
  function merge(left, right) {
    let vector = [];

    while (left.length && right.length) {
      iterations++;
      if (left[0] < right[0]) {
        vector.push(left.shift());
      } else {
        vector.push(right.shift());
      }
    }

    return [...vector, ...left, ...right];
  }

  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = MergeSort(array.slice(0, mid));
  let right = MergeSort(array.slice(mid));

  return merge(left, right);
}

export default MergeSort;