import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  height: 7%;
  font-size: 13px;
  color: rgb(150, 150, 150);
`;

function Footer() {
  return (
    <Layout>
      <strong>Copyright ⓒ DAONTEC Inc. All Rights Reserved.</strong>
    </Layout>
  );
}

export default Footer;
