import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import {Route , Link} from 'react-router-dom';

const items = [
  {
    src: 'game1.jpg',
    altText: 'Slide 1',
    header: 'Positive Association of Video Game Playing with Left Frontal Cortical Thickness in Adolescents'
  },
  {
    src: 'game2.jpg',
    altText: 'Slide 2',
    header: 'Playing Super Mario induces structural brain plasticity'
  },
  {
    src: 'game3.jpg',
    altText: 'Slide 3',
    header: 'Action Video Games Improve Vision'
  }
];

const Body = () => <UncontrolledCarousel items={items} />;

export default Body;