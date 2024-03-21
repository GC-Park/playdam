import styled from 'styled-components';
import { PlayItemProps } from '../../types/PlayItem';

interface PlayItemInformationProps {
  PlayItemProps: PlayItemProps;
  closeEvent: () => void;
}

const PlayItemInformation = ({ PlayItemProps, closeEvent }: PlayItemInformationProps) => {
  const { id, age, time, runtime, state, detailImages } = PlayItemProps;

  return (
    <PlayItemInformationWrapper>
      <InformationsWrapper>
        <PlayItemKey>공연시간</PlayItemKey>
        <PlayItemValue>{time}</PlayItemValue>
        <PlayItemKey>관람등급</PlayItemKey>
        <PlayItemValue>{age}</PlayItemValue>
        <PlayItemKey>관람시간</PlayItemKey>
        <PlayItemValue>{runtime}</PlayItemValue>
        <PlayItemKey>공연상태</PlayItemKey>
        <PlayItemValue>{state}</PlayItemValue>
        <PlayItemKey>소개 포스터</PlayItemKey>
        <PlayItemPoster src={detailImages} />
        <PlayItemButton onClick={closeEvent}>닫기</PlayItemButton>
      </InformationsWrapper>
    </PlayItemInformationWrapper>
  );
};

const PlayItemInformationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 80%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;

  overflow: scroll;
`;

const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayItemKey = styled.h3`
  font-size: 18px;
  margin-bottom: 4px;
`;

const PlayItemValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
`;

const PlayItemPoster = styled.img`
  width: 300px;
`;

const PlayItemButton = styled.button`
  width: 100%;
  height: 44px;

  margin-top: 24px;
  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: #a301db;
  color: #ffffff;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: #7c3793;
  }
`;

export default PlayItemInformation;
