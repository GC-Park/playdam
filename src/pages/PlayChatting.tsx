import Inventory from '../components/Inventory';
import { useLocation } from 'react-router-dom';
import Chatting from '../components/Chatting';
import styled from 'styled-components';

function PlayChatting() {
  let location = useLocation();

  return (
    <PlayChattingView>
      <Inventory path={location.pathname} />
      <Chatting />
    </PlayChattingView>
  );
}

const PlayChattingView = styled.div`
  width: 100%;
  height: 100%;
`

export default PlayChatting;
