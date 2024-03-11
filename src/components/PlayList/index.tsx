import styled from 'styled-components';
import PlayItem from '../PlayItem';
import mockData from '../mockData/playItemList.json';
import { PlayItemProps } from '../../types/PlayItem';

function PlayList() {
  return (
    <PlayListWrapper>
      {mockData.playItemList.map((item: PlayItemProps) => (
        <PlayItem id={item.id} title={item.title} location={item.location} time={item.time} image={item.image} />
      ))}
    </PlayListWrapper>
  );
}

const PlayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export default PlayList;
