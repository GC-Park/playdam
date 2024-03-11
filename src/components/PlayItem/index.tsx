import styled from 'styled-components';
import { PlayItemProps } from '../../types/PlayItem';

function PlayItem({ id, title, location, time, image }: PlayItemProps) {
  return (
    <PlayItemWrapper>
      <PlayItemThumnail src={image} />
      <PlayItemInfo>
        <PlayItemTitle>{title}</PlayItemTitle>
        <PlayItemLocation>{location}</PlayItemLocation>
        <PlayItemTimeOfWeek>{time}</PlayItemTimeOfWeek>
      </PlayItemInfo>
    </PlayItemWrapper>
  );
}

const PlayItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;

const PlayItemThumnail = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 168px;
  min-width: 120px;
  min-height: 168px;

  margin-right: 16px;

  border-radius: 12px;
`;

const PlayItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PlayItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;

const PlayItemLocation = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  color: #a301db;
`;

const PlayItemTimeOfWeek = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export default PlayItem;
