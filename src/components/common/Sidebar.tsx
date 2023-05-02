import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Menu from './Menu';

function SideBar( { setDisplay }: { setDisplay: string } ) {
  const Layout = styled.div`
    width: 320px;
    height: 100%;
    background-color: rgb(250, 250, 250);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: ${setDisplay}
  `;

  return (
    <Layout>
      <Profile />
      <Menu />
    </Layout>
  );
}

export default SideBar;
