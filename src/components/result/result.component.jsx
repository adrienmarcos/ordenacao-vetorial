import { Divider, Flex, NumberInput, NumberInputField, useDisclosure, SlideFade, Button, Box } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, TableCaption, TableContainer } from '@chakra-ui/react'
import BubbleSort from "../sort-methods/bubble-sort/bubble-sort.component";
import InsertionSort from "../sort-methods/insertion-sort/insertion-sort.component";
import MergeSort from "../sort-methods/merge-sort/merge-sort.component";
import QuickSort from "../sort-methods/quick-sort/quick-sort.component";
import SelectionSort from "../sort-methods/selection-sort/selection-sort.component";
import ShellSort from "../sort-methods/shell-sort/shell-sort.component";
import Ordination from "../ordination/ordination.component";
import "./result.styles.scss";

const Result = (props) => {
  const array = props.array;
  const sortMethod = props.sortMethod;
  const { isOpen: showResults, onToggle: toggleResults } = useDisclosure();

  const reload = () => {
    window.location.reload();
  }

  const renderSwitch = (sortMethod) => {
    switch(sortMethod) {
      case "Bubble Sort":
        return BubbleSort(array);
      case "Insertion Sort":
        return InsertionSort(array);
      case "Merge Sort":
        return MergeSort(array);
      case "Quick Sort":
        return QuickSort(array);
      case "Selection Sort":
        return SelectionSort(array);
      case  "Shell Sort":
        return ShellSort(array);
    };
  };

  return (
    <div className="result-component">
      <h1>Resultados</h1>

      <p>
        Veja abaixo o vetor ordenado através do método <strong>{ sortMethod }</strong>. <br/>
        Caso tenha interesse, você pode visualizar a comparação dos resultados através de outros métodos de ordenação. <br/> <br/>
        Caso deseje efetuar uma nova simulação, <a onClick={reload}>clique aqui.</a>
      </p>

      <Flex wrap="wrap" mt="40px">
        { 
          renderSwitch(sortMethod).map((value, index) => (
            <NumberInput isReadOnly key={index} value={value} className="arrayPosition" >
              <NumberInputField />
            </NumberInput>
          ))
        }
        
      </Flex>

      <Divider mt="40px" mb="40px"/>

      <Flex justifyContent="center">
        <Button colorScheme="blue" mb="20px" onClick={toggleResults}>Mostrar/Ocultar Resultados</Button>
      </Flex>

      <SlideFade in={showResults} offsetY="-20px">
        <div className="table-container">
          <TableContainer>
            <Table variant="simple" size="sm">
              <TableCaption placement="bottom">Resultados da ordenação do mesmo vetor por diferentes métodos</TableCaption>
              <Thead>
                <Tr>
                  <Th>Método Utilizado</Th>
                  <Th isNumeric>Iterações Efetuadas no Vetor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Ordination array={array} />
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </SlideFade>
    </div>
  );
};

export default Result;