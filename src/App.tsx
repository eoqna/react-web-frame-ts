import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  text-align: center;
  background-color: black;
  height: 100%;
  width: 100%;
`;

const MainTitle = styled.span`
  color: white;
  fort-weight: bold;
  font-size: 30px;
`;

function App() {

  return (
    <ContentWrapper>
      <MainTitle>
        테스트 입니다.
      </MainTitle>
    </ContentWrapper>
  );
}

export default App;
