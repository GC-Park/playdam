import styled from 'styled-components';
import PlayItem from '../PlayItem';
import mockData from '../mockData/playItemList.json';
import { PlayItemProps } from '../../types/PlayItem';

function PlayList() {
  return (
    <PlayListWrapper>
      {mockData.playItemList.map((item: PlayItemProps) => (
        <PlayItem
          id={item.id}
          title={item.title}
          location={item.location}
          time={item.time}
          image={item.image}
          age={item.age}
          runtime={item.runtime}
          state={item.state}
          detailImages={item.detailImages}
        />
      ))}
    </PlayListWrapper>
  );
}

const PlayListWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default PlayList;
