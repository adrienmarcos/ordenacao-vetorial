const BubbleSort = (vector, modifications) => {
  const array = vector.slice();
  let modificacoes = 0;

  for (let i = 0 ; i < array.length ; i++) { 
    modificacoes++;
    for (let j = 0; j < (array.length - i - 1); j++) { 
      modificacoes++;
      if (array[j] > array[j+1]) {
        let tmp = array[j]; 
        array[j] = array[j+1]; 
        array[j+1] = tmp; 
      }
    }        
  }

  if (modifications) {
    const result = { array: array, modificacoes: modificacoes };
    return result;
  } else {
    return array;
  }
};

export default BubbleSort;