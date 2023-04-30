import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/common/Sidebar';

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 8%;
  background-color: #eee;
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

const BodyWrapper = styled.div`
  display: flex;
  text-align: center;
  height: 85%;
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.span`

  fort-weight: bold;
  font-size: 30px;
`;

const Footer = styled.div`
  display: flex;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  height: 7%;
`;

function App() {
  const [ sidebar, setSidebar ] = useState(false);

  const onClickSideBarButton = () => {
    console.log('clicked sidebar button');
    setSidebar(true);
  };

  return (
    <MainLayout>
      <Header>
        <HeaderButton
          onClick={onClickSideBarButton}
        >
          버튼
        </HeaderButton>
        <HeaderTitle>
          헤더
        </HeaderTitle>
        <div>

        </div>
      </Header>

      <BodyWrapper>

        {sidebar ?
          (<Sidebar sidebar={sidebar} setSidebar={setSidebar} setWidth='300px'/>)
          :
          (<Sidebar sidebar={sidebar} setSidebar={setSidebar} setWidth='0px'/>)
        }
        
        <MainWrapper>
          <MainTitle>
            메인
          </MainTitle>
        </MainWrapper>

      </BodyWrapper>

      <Footer>
        푸터
      </Footer>
    </MainLayout>
  );
}

export default App;
