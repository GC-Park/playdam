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
  width: 100%;
  height: 270px;
  background-size: contain;
`;

const PlayReviewItemButton = styled.button`
  width: 110px;
  height: 40px;
  margin-top: 20px;
  color: #A301DB;
  background-color: #ffffff;
  border: 1px solid #A301DB;
  border-radius: 10px;

  box-shadow: rgba(69, 69, 69, 0.15) 8px 8px 8px 0px;

  &:hover {
    color: #ffffff;
    background-color: #A301DB;
  }
`;

export default PlayReviewItem;
