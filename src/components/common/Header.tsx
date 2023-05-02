import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Layout = styled.div`
  display: flex;
  height: 8%;
  background-color: #eee;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const TitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  line-height: 30px;
`;

function Header({sidebar, setSidebar} : {sidebar: boolean, setSidebar: any}) {

  const onClickSideBarButton = useCallback(() => {
    const isSidebar = !sidebar;
    setSidebar(isSidebar);

  }, [sidebar]);

  return (
    <Layout>
      <MenuButton
        onClick={onClickSideBarButton}
      >
        <Icon path={mdiMenu} size={1} />
      </MenuButton>
      
      <TitleLayout>
        <img 
          src={require('../../assets/image/logo.png')} 
          alt='메뉴' 
          width={30} 
          height={20} 
          style={{padding: 10}}
        />

        <Title>
          DAVIS
        </Title>
      </TitleLayout>

      <div
        style={{width: 30}}
      >

      </div>
    </Layout>
  );
}

export default Header;
