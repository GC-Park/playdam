import styled from 'styled-components';
import mockData from '../mockData/playItemList.json';
import { PlayItemProps } from '../../types/PlayItem';
import PlayReviewItem from '../PlayReviewItem';

function PlayReviewList() {
  return (
    <PlayReviewListWrapper>
      {mockData.playItemList.map((Item: PlayItemProps) => (
        <PlayReviewItem key={Item.id} id={Item.id} image={Item.poster} />
      ))}
    </PlayReviewListWrapper>
  );
}

const PlayReviewListWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 48px 0;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 48px;
`;

export default PlayReviewList;
