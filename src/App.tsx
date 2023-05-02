import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Main from './components/common/Main';

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyLayout = styled.div`
  display: flex;
  text-align: center;
  height: 85%;
  width: 100%;
`;

function App() {
  const [ sidebar, setSidebar ] = useState(false);

  return (
    <Layout>
      <Header sidebar={sidebar} setSidebar={setSidebar} />

      <BodyLayout>

        <BrowserRouter>
          {sidebar ?
            (<Sidebar setDisplay='none'/>)
            :
            (<Sidebar setDisplay='block'/>)
          }
        
          <Main />
        </BrowserRouter>

      </BodyLayout>

      <Footer />
    </Layout>
  );
}

export default App;
