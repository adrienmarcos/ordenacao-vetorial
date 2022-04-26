const ShellSort = (array, modifications) => {
  let increment = array.length / 2;
  let modificacoes = 0;

  while (increment > 0) {
    modificacoes++;
    for (let i = increment ; i < array.length ; i++) {
      modificacoes++;
      let j = i;
      let temp = array[i];

      while (j >= increment && array[j-increment] > temp) {
        modificacoes++;
        array[j] = array[j-increment];
        j = j - increment;
      }

      array[j] = temp;
    }

    if (increment == 2) {
      increment = 1;
    } else {
      increment = parseInt(increment*5 / 11);
    }
  }

  if (modifications) {
    const result = { array: array, modificacoes: modificacoes };
    return result;
  } else {
    return array;
  }
}

export default ShellSort;