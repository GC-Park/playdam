import styled from 'styled-components';

function PlayItem() {
  return (
    <ItemWrapper>
      <ItemThumnail />
      <ItemTitle></ItemTitle>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ItemThumnail = styled.img`
  border-radius: 8px;
  width: 180px;
  height: 270px;
  background-size: contain;
`;

const ItemTitle = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default PlayItem;
