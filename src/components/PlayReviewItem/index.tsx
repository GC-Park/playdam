import styled from 'styled-components';

interface PlayReviewItemProps {
  id: number;
  image: string;
}

function PlayReviewItem({id, image}:PlayReviewItemProps) {
  return <PlayReviewItemWrapper>
    <PlayReviewItemThumbnail src={image}/>
    <PlayReviewItemButton>후기보기</PlayReviewItemButton>
  </PlayReviewItemWrapper>;
}

const PlayReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PlayReviewItemThumbnail = styled.img`
  border-radius: 8px;
  width: 180px;
  height: 270px;
  background-size: contain;
`;

const PlayReviewItemButton = styled.button`
  width: 180px;
  height: 60px;
  margin-top: 32px;
  color: #667085;

  &:hover {
    color: #ffffff;
    background-color: #A301DB;
  }
`;

export default PlayReviewItem;
