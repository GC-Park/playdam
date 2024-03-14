import styled from 'styled-components';
import { PlayItemProps } from '../../types/PlayItem';

interface PlayItemInformationProps {
  PlayItemProps: PlayItemProps;
  closeEvent: () => void;
}

const PlayItemInformation = ({ PlayItemProps, closeEvent }: PlayItemInformationProps) => {
  const { id, age, runtime, state, detailImages } = PlayItemProps;

  return (
    <PlayItemInformationWrapper>
      <PlayItemKey>관람등급</PlayItemKey>
      <PlayItemValue>{age}</PlayItemValue>
      <PlayItemKey>공연시간</PlayItemKey>
      <PlayItemValue>{runtime}</PlayItemValue>
      <PlayItemKey>공연상태</PlayItemKey>
      <PlayItemValue>{state}</PlayItemValue>
      <PlayItemKey>소개 포스터</PlayItemKey>
      <PlayItemPoster src={detailImages} />
      <PlayItemButton onClick={closeEvent} />
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
  background: #ffffff;;

  overflow: scroll;
`;

const PlayItemKey = styled.h3`
  margin-bottom: 16px;
`;

const PlayItemValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
`;

const PlayItemPoster = styled.img`
  width: 100%;
`;

const PlayItemButton = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: #a301db;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: #7c3793;
  }
`;

export default PlayItemInformation;
