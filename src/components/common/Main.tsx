import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Notice from '../../screens/menu/Notice';
import Officer from '../../screens/menu/Officer';
import Complex from '../../screens/menu/Complex';
import Approval from '../../screens/menu/Approval';
import Push from '../../screens/menu/Push';
import User from '../../screens/menu/User';
import NotFound from '../../screens/common/NotFound';

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

function Main() {

  return (
    <Layout>
      <Routes>
        <Route path='/admin/notice' element={<Notice />} />
        <Route path='/admin/officer' element={<Officer />} />
        <Route path='/admin/complex' element={<Complex />} />
        <Route path='/admin/approval' element={<Approval />} />
        <Route path='/admin/user' element={<User />} />
        <Route path='/admin/push' element={<Push />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default Main;
