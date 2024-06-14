import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Inventory from '../components/Inventory';
import styled from 'styled-components';
import example from '../threejs/Museum';
import mockData from '../components/mockData/playItemList.json';

function PlayMuseum() {
  let location = useLocation();
  const images = mockData.playItemList.map(item => {
    return item.poster;
  });

  useEffect(() => {
    example();
  });

  return (
    <>
      <Inventory path={location.pathname} />
      <PlayMuseumView>
        <PlayMuseumCanvas id="three-canvas" />
      </PlayMuseumView>
    </>
  );
}

const PlayMuseumView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

const PlayMuseumCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 126px;
`;

export default PlayMuseum;
