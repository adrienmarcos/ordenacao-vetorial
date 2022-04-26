import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-component">
      <h1>Sobre mim</h1>

      <p>
        Sou um Web-App de interface minimalista cujo objetivo é implementar métodos de ordenação vetorial. <br/>
        Minha interface é de fácil utilização os métodos de ordenação implementados por mim são: "Bubble Sort, Merge Sort, Insertion Sort, Selection Sort, Quick Sort, Shell Sort". <br/>
        Fui criado para atender os requisitos de um trabalho proposto pela Universidade Estácio SA no curso de Ciências da Computação. <br/> <br/>
        Abaixo você pode visualizar as tecnologias utilizadas na minha criação:
      </p>

      <List spacing={1} ml="10px">
        <ListItem>
          <ListIcon as={CheckCircleIcon} />
          React JS
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} />
          JavaScript
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon}  />
          Chraka UI
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon}  />
          Sass
        </ListItem>
      </List>
    </div>
  );
};

export default About;