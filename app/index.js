import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './app-test.scss';

const Wrap = styled.div`
  font-size: 50px;
`;

const App = () => (
  <Wrap>
    React App
  </Wrap>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
