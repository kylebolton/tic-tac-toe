import React from 'react';
import Table from './Components/Table'
import styled from 'styled-components';

function App() {
  return (
      <MainContainer>
          <Table />
      </MainContainer>

  );
}

export default App;

const MainContainer = styled('div')`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
