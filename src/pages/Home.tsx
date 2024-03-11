import { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

function Home() {
  return (
    <>
      <Header />
      <ItemView></ItemView>
    </>
  );
}

const ItemView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

export default Home;
