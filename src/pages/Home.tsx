import { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import PlayList from '../components/PlayList';

function Home() {
  return (
    <>
      <Header />
      <PlayList />
    </>
  );
}

export default Home;
