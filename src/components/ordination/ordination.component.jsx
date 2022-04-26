import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { Fragment } from 'react';
import BubbleSort from '../sort-methods/bubble-sort/bubble-sort.component';
import InsertionSort from '../sort-methods/insertion-sort/insertion-sort.component';
import MergeSort from '../sort-methods/merge-sort/merge-sort.component';
import QuickSort from '../sort-methods/quick-sort/quick-sort.component';
import SelectionSort from '../sort-methods/selection-sort/selection-sort.component';
import ShellSort from '../sort-methods/shell-sort/shell-sort.component';

const Ordination = (props) => {
  const array = props.array;

  const renderSwitch = (sortMethod) => {
    switch(sortMethod) {
      case 1:
        return BubbleSort(array, true);
      case 2:
        return InsertionSort(array, true);
      case 3:
        return MergeSort(array);
      case 4:
        return QuickSort(array);
      case 5:
        return SelectionSort(array, true);
      case  6:
        return ShellSort(array, true);
    };
  };

  return (
    <Fragment>
      <Tr>
        <Td>Bubble Sort</Td>
        <Td isNumeric>{ renderSwitch(1).modificacoes } Iterações Realizadas</Td>
      </Tr>
      <Tr>
        <Td>Insertion Sort</Td>
        <Td isNumeric>{ renderSwitch(2).modificacoes } Iterações Realizadas</Td>
      </Tr>
      <Tr>
        <Td>Merge Sort</Td>
        <Td isNumeric>{ renderSwitch(3).modificacoes } Algoritmo Rercursivo</Td>
      </Tr>
      <Tr>
        <Td>Quick Sort</Td>
        <Td isNumeric>{ renderSwitch(4).modificacoes } Algoritmo Recursivo</Td>
      </Tr>
      <Tr>
        <Td>Selection Sort</Td>
        <Td isNumeric>{ renderSwitch(5).modificacoes } Iterações Realizadas</Td>
      </Tr>
      <Tr>
        <Td>Shell Sort</Td>
        <Td isNumeric>{ renderSwitch(6).modificacoes } Iterações Realizadas</Td>
      </Tr>

    </Fragment>
  );
};

export default Ordination;