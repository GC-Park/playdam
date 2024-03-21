import { useLocation } from 'react-router-dom';
import Inventory from '../components/Inventory';
import styled from 'styled-components';
import PlayReviewList from '../components/PlayReviewList';

function ReviewCollection() {
  let location = useLocation();

  return (
    <>
      <Inventory path={location.pathname} />
      <ReviewCollectionView>
        <PlayReviewList />
      </ReviewCollectionView>
    </>
  );
}

const ReviewCollectionView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

export default ReviewCollection;
