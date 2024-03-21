import styled from 'styled-components';
import { PlayReviewBlogProps } from '../../types/PlayReviewBlog';

function PlayReviewBlogItem({ id, name, title, date, image }: PlayReviewBlogProps) {
  return (
    <PlayReviewBlogItemWrapper>
      <ThumbnailWrapper>
        <Thumbnail src={image} />
      </ThumbnailWrapper>
      <PlayReviewBlogItemInfoContainer>
        <UserName>{name}</UserName>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <CreatedAt>{date}</CreatedAt>
      </PlayReviewBlogItemInfoContainer>
    </PlayReviewBlogItemWrapper>
  );
}

const PlayReviewBlogItemWrapper = styled.li`
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  list-style: none;

  border: 1px solid rgba(229, 231, 235, 1);
  box-shadow: rgba(69, 69, 69, 0.1) 2px 2px 2px 0px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  border-radius: 15px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 15px;
  object-fit: cover;

  box-shadow: rgba(69, 69, 69, 0.1) 4px 4px 2px 0px;
`;

const PlayReviewBlogItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 10px;
`;

const UserName = styled.span`
  color: grey;
  font-size: 0.8rem;
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: 700;
`;

const CreatedAt = styled.span`
  width: 100%;
  margin-top: 8px;
  color: grey;
  text-align: right;
  font-size: 0.8rem;
  font-weight: 700;
`;

export default PlayReviewBlogItem;
