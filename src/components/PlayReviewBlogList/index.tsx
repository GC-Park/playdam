import styled from 'styled-components';
import mockData from '../mockData/playReviewBlogList.json';
import { PlayReviewBlogProps } from '../../types/PlayReviewBlog';
import PlayReviewBlogItem from '../PlayReviewBlogItem';

function PlayReviewBlogList() {
  return (
    <PlayReviewBlogListWrapper>
      {mockData.playReviewBlogList.map((Item: PlayReviewBlogProps) => (
        <PlayReviewBlogItem
          key={Item.id}
          id={Item.id}
          name={Item.name}
          title={Item.title}
          date={Item.date}
          image={Item.image}
        />
      ))}
    </PlayReviewBlogListWrapper>
  );
}

const PlayReviewBlogListWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 48px 0;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 48px;
`;

export default PlayReviewBlogList;
