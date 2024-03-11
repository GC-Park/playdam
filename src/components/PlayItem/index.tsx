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

const PlayItemWrapper = styled.div`
  display: flex;
`;

const PlayItemThumnail = styled.img`
  border-radius: 8px;
  width: 120px;
  height: 168px;
  min-height: 120px;
  min-width: 168px;

  display: flex;
  justify-content: center;
  align-items: center;
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
