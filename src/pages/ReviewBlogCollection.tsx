import { useLocation } from 'react-router-dom';
import Inventory from '../components/Inventory';
import styled from 'styled-components';
import PlayReviewBlogList from '../components/PlayReviewBlogList';

function ReviewBlogCollection() {
  let location = useLocation();
  
  return (
    <>
      <Inventory path={location.pathname} />
      <ReviewBlogCollectionView>
        <PlayReviewBlogList />
      </ReviewBlogCollectionView>
    </>
  );
}

const ReviewBlogCollectionView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

export default ReviewBlogCollection;
