import { CheckIcon } from "@chakra-ui/icons";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Button, PopoverFooter } from '@chakra-ui/react'
import { Flex, IconButton, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { useState } from "react";
import { SlideFade, useDisclosure } from "@chakra-ui/react";
import "./home.styles.scss";
import "./form.styles.scss";
import Result from "../../components/result/result.component";

const Home = () => {
  const { isOpen: showForm, onToggle: toggleForm } = useDisclosure();
  const { isOpen: showExecute, onToggle: toggleShowExecute } = useDisclosure();
  const [ array, setArray ] = useState([]);
  const [ range, setRange ] = useState(1);
  const [ execute, setExecute ] = useState(false);
  const [ sortMethod, setSortMethod ] = useState('Bubble Sort');

  const changeMethod = (sortMethod) => {
    setSortMethod(sortMethod.target.value);
  }

  const startOrdination = () => {
    setExecute(true);
  } 

  const changeRange = (range) => {
    setRange(range);
    setArray([]);
    disableShowExecute();
  }

  const createArray = () => {
    enableShowExecute();
    const newArray = Array.from({ length: range }, () => Math.floor(Math.random() * 9999));
    setArray(newArray);
  }

  const enableShowExecute = () => {
    if(!showExecute) {
      toggleShowExecute();
    }
  }

  const disableShowExecute = () => {
    if(showExecute) {
      toggleShowExecute();
    }
  }

  const updateArray = (value, index) => {
    const newArray = [ ...array ];
    newArray[index] = value;
    setArray(newArray);
  }

  if (!execute) {
    return (
      <div className="home-component">
        <h1>Ordenação Vetorial</h1>

        <p>
          Seja muito bem-vindo ao Ordenação Vetorial Web-App. <br/>
          Para utilizar-me basta preencher os dados de nosso formulário, alimentar as informações no vetor e analisar os resultados. <br/> <br/>
          Lembre-se que rodo no seu navegador, e um vetor de tamanho exagerado pode me quebrar. Sinta-se livre caso queira simular essa situação.
        </p>

        <p>Quando estiver pronto para começar <a onClick={toggleForm}>clique aqui.</a></p> 
      
        <SlideFade in={showForm} offsetY="-20px">
          <form className="form">
            <FormControl isRequired className="formControl">
              <FormLabel htmlFor="sortMethod">Método de ordenação</FormLabel>

              <Select isDisabled={!showForm} id="sortMethod" onChange={(value) => changeMethod(value)} >
                <option value="Bubble Sort">Bubble Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Quick Sort">Quick Sort</option>
                <option value="Selection Sort">Selection Sort</option>
                <option value="Shell Sort">Shell Sort</option>
              </Select>
            </FormControl>

            <FormControl isRequired className="formControl">
              <FormLabel htmlFor="arrayRange">Tamanho do Vetor</FormLabel>

              <Flex>
                <NumberInput isDisabled={!showForm} min={1} mr="2rem" value={range} onChange={changeRange}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <Slider isDisabled={!showForm} focusThumbOnChange={false} value={range} mr="2rem" onChange={changeRange}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb fontSize="sm" style={{color: "#3182CE"}} boxSize="32px" children={range} />
                </Slider>

                <Popover>
                  <PopoverTrigger>
                    <IconButton isDisabled={!showForm} colorScheme="blue" icon={<CheckIcon/>} pl="20px" pr="20px" onClick={createArray}/> 
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Sucesso na criação do vetor!</PopoverHeader>
                    <PopoverBody>
                      Tomei a liberdade de preenchê-lo com número aleatórios.
                      Sinta-se livre para alterá-lo clicando nos blocos.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </FormControl>

            <FormControl className="formControl" mt="40px">
              <Flex justifyContent="center">
                <SlideFade in={showExecute} offsetY="-20px">
                  <Button isDisabled={array.length < 1} colorScheme="blue" mb="20px" onClick={startOrdination}>Iniciar Ordenação</Button>
                </SlideFade>
              </Flex>

              <Flex wrap="wrap">
                {
                  array.map((value, index) => (
                    <NumberInput isRequired key={index} min={0} max={9999} value={value} className="arrayPosition" 
                      onChange={(newValue) => updateArray(newValue, index)}>
                      <NumberInputField />
                    </NumberInput>
                  ))
                }
              </Flex>
            </FormControl>
          </form>
        </SlideFade>
      </div>
    );
  } else {
    return (<Result array={array} sortMethod={sortMethod} />)
  }
};

export default Home;