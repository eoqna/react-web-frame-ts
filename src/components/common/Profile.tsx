import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 20px 20px 20px 25px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: left;
`;

const NickName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  font-weight: bold;
`;

const ComplexName = styled.div`
  color: #888;
  font-size: 13px;
`;

function Profile() {

  return (
    <Layout>
      <img 
        src={require('../../assets/image/profile.jpg')} 
        alt='프로필 사진' 
        width={40} 
        height={40} 
        style={{borderRadius: '50%'}}
      />

      <UserInfo>
        <NickName>관리자</NickName>

        <ComplexName>다온빌딩</ComplexName>
      </UserInfo>
    </Layout>
  );
}

export default Profile;
