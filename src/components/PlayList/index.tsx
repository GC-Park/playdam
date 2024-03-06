import styled from 'styled-components';

function PlayList() {
  return (
    <PlayListWrapper>
      <PlayListTitle>상영 연극 시간 모음</PlayListTitle>
      <PlayListItemsWrapper></PlayListItemsWrapper>
    </PlayListWrapper>
  );
}

const PlayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
`;

const PlayListTitle = styled.h2`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  user-select: none;
`;

const PlayListItemsWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 48px 0;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 48px;
`;

export default PlayList;
