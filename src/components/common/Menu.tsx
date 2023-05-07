import React, { useState } from 'react';
import Icon from '@mdi/react';
import { 
  mdiAlertCircleOutline
  , mdiAccountTieHat
  , mdiAccount
  , mdiCellphoneCog
  , mdiCity
  , mdiBellRing } 
from '@mdi/js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuLayout = styled.ul`
  list-style: none;
  padding: 20px 0 0 30px;
  text-align: left;
`;

const MenuList = styled.div`
  height: 40px;
  color: rgba(0, 0, 0, 0.6);
`;

export interface MenuProps {
  index: number;
  title: string;
  icon: string;
  to: string;
};

const menus: MenuProps[] = [
  {
    index: 0,
    title: '공지사항',
    icon: mdiAlertCircleOutline,
    to: '/admin/notice',
  },
  {
    index: 1,
    title: '근무자 관리',
    icon: mdiAccountTieHat,
    to: '/admin/officer',
  },
  {
    index: 2,
    title: '앱 사용자 관리',
    icon: mdiAccount,
    to: '/admin/user',
  },
  {
    index: 3,
    title: '앱 사용자 승인',
    icon: mdiCellphoneCog,
    to: '/admin/approval',
  },
  {
    index: 4,
    title: '단지 관리',
    icon: mdiCity,
    to: '/admin/complex',
  },
  {
    index: 5,
    title: 'PUSH 알림',
    icon: mdiBellRing,
    to: '/admin/push',
  },
];

function Menu() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    &:active {
      color: black;
      font-weight: bold;
    }
  `;

  return (
    <MenuLayout>
      {menus.map((menu) => {
        return(
          <li key={menu.index} style={{marginBottom: 10}}>
            <MenuList>
              <StyledLink to={menu.to}>
                <Icon path={menu.icon} size={1} style={{marginRight: 10}}/>
                <span style={{fontSize: 14}}>{menu.title}</span>
              </StyledLink>
            </MenuList>
          </li>
        )
      })}
    </MenuLayout>
  );
}

export default Menu;
