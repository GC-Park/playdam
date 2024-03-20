import styled from 'styled-components';

function PlayReviewBlogItem() {
  return (
    <PlayReviewBlogItemWrapper>
      <ThumbnailWrapper>
        <Thumbnail src="" />
      </ThumbnailWrapper>
      <PlayReviewBlogItemInfoContainer>
        <UserName></UserName>
        <Title></Title>
        <CreatedAt></CreatedAt>
      </PlayReviewBlogItemInfoContainer>
    </PlayReviewBlogItemWrapper>
  );
}

const PlayReviewBlogItemWrapper = styled.li`
  width: 100%;
  height: 240px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  list-style: none;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 154px;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 154px;
  border-radius: 15px;
  object-fit: cover;
`;

const PlayReviewBlogItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;

const UserName = styled.span`
  color: grey;
  font-size: 16px;
`;

const Title = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

const CreatedAt = styled.span`
  width: 100%;
  margin-top: 16px;
  color: grey;
  text-align: right;
  font-size: 16px;
  font-weight: 700;
`;

export default PlayReviewBlogItem;
