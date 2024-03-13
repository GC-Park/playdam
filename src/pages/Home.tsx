import { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import PlayList from '../components/PlayList';
import Inventory from '../components/Inventory';

function Home() {
  return (
    <>
      <Header />
      <Inventory />
      <PlayList />
    </>
  );
}

export default Home;
