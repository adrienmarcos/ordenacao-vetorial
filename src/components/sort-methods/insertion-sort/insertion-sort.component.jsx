const InsertionSort = (vector, modifications) => {
  const array = vector.slice();
  let modificacoes = 0;

  for (let i = 0 ; i < array.length ; i++) {
    modificacoes++;
    for (let j = i ; j > 0 ; j--) {
      modificacoes++;
      if (array[j] < array[j-1]) {
        const tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp;
      } else {
        break;
      }
    }
  }

  if (modifications) {
    const result = { array: array, modificacoes: modificacoes };
    return result;
  } else {
    return array;
  }
}

export default InsertionSort;