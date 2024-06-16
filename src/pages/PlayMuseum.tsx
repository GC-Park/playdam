import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Inventory from '../components/Inventory';
import styled from 'styled-components';
import example from '../threejs/Museum';

function PlayMuseum() {
  let location = useLocation();

  useEffect(() => {
    example();
  });

  return (
    <PlayMuseumWrapper>
      <Inventory path={location.pathname} />
      <PlayMuseumView>
        <PlayMuseumCanvas id="three-canvas" />
      </PlayMuseumView>
    </PlayMuseumWrapper>
  );
}

const PlayMuseumWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PlayMuseumView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const PlayMuseumCanvas = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 126px;
`;

export default PlayMuseum;
