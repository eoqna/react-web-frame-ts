import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  height: 100%;
  background-color: #ddd;
  border-right: 1px solid #eee;
`;

function App({ sidebar, setSidebar, setWidth }: { sidebar: boolean; setSidebar: any, setWidth: string }) {
  const open = useRef<any>();

  useEffect(() => {
  }, [])

  return (
    <SideBar id="sidebar" ref={open}>

    </SideBar>
  );
}

export default App;
