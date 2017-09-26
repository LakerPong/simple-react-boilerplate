import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './assets/css/styles.css';
import cssModule from './app-test.css';

import Img18 from './assets/img/ex-18k.png';
import Img38 from './assets/img/ex-38k.jpg';

const StyledComponent = styled.div`
  font-size: 50px;
`;

const App = () => (
  <div>
    <StyledComponent className={cssModule.root}>
    React App
    </StyledComponent>
    <div>styled component: font-size: 50px;</div>
    <div>css module: border: 2px solid rebeccapurple;</div>
    <br/>
    <div>less than 25kb will be base:64 file</div>
    <img alt="18kb" src={Img18} />
    <div>larger than 25kb will be the image</div>
    <img alt="38kb" src={Img38} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
