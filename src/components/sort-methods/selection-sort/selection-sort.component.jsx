const SelectionSort = (vector, modifications) => {
  const array = vector.slice();
  let modificacoes = 0;
  
  for (let i = 0 ; i < array.length - 1 ; i++) {
    modificacoes++;
    let minIndex = i;

    for (let j = i + 1 ; j < array.length; j++) {
      modificacoes++;
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }

  if (modifications) {
    const result = { array: array, modificacoes: modificacoes };
    return result;
  } else {
    return array;
  }
}

export default SelectionSort;