import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  text-align: center;
  background-color: black;
  height: 800px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 48px;
  background-color: #ccc;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 10px;
  margin-left: 10px;
`;

const HeaderTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

const MainTitle = styled.span`
  color: white;
  fort-weight: bold;
  font-size: 30px;
`;

const Footer = styled.div`
  display: flex;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

function App() {

  return (
    <>
      <Header>
        <HeaderButton>
          버튼
        </HeaderButton>
        <HeaderTitle>
          Title
        </HeaderTitle>
        <div>

        </div>
      </Header>

      <ContentWrapper>
        <MainTitle>
          테스트 입니다.
        </MainTitle>

      </ContentWrapper>

      <Footer>
        Footer
      </Footer>
    </>
  );
}

export default App;
