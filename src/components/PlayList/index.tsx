import styled from 'styled-components';
import PlayItem from '../PlayItem';
import mockData from '../mockData/playItemList.json';
import { PlayItemProps } from '../../types/PlayItem';

function PlayList() {
  return (
    <PlayListWrapper>
      {mockData.playItemList.map((item: PlayItemProps) => (
        <PlayItem
          key={item.id}
          id={item.id}
          title={item.title}
          place={item.place}
          times={item.times}
          poster={item.poster}
          age={item.age}
          screeningTime={item.screeningTime}
          directors={item.directors}
          relates={item.relates}
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
