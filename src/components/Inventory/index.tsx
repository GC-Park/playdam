import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface InventoryProps {
  path: string;
}

function Inventory({ path }: InventoryProps) {
  const navigate = useNavigate();

  const ScheduleOnClick = () => {
    navigate('/');
  };

  const ChattingOnclick = () => {
    navigate('/chatting');
  };

  const reviewOnclick = () => {
    navigate('/particleEffect');
  };

  return (
    <InventoryWrapper>
      <InventoryScheduleTap path={path} onClick={ScheduleOnClick}>
        스케줄
      </InventoryScheduleTap>
      <InventoryChattingTap path={path} onClick={ChattingOnclick}>
        챗봇
      </InventoryChattingTap>
      <InventoryReviewTap path={path} onClick={reviewOnclick}>
        지구본
      </InventoryReviewTap>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  width: 100vw;
  box-shadow: rgba(69, 69, 69, 0.15) 4px 4px 4px 0px;
`;

const InventoryScheduleTap = styled.div<{ path: string }>`
  width: 50%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  padding: 9px;
  margin-left: 16px;
  cursor: pointer;

  color: ${({ path }) => (path === '/' ? '#A301DB' : '#667085')};
  border-bottom: ${({ path }) => (path === '/' ? '2px solid #A301DB' : '2px solid #667085')};
`;

const InventoryChattingTap = styled.div<{ path: string }>`
  width: 50%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  padding: 9px;
  cursor: pointer;

  color: ${({ path }) => (path === '/chatting' ? '#A301DB' : '#667085')};
  border-bottom: ${({ path }) => (path === '/chatting' ? '2px solid #A301DB' : '2px solid #667085')};
`;

const InventoryReviewTap = styled.div<{ path: string }>`
  width: 50%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  padding: 9px;
  margin-right: 16px;
  cursor: pointer;

  color: ${({ path }) => (path === '/particleEffect' ? '#A301DB' : '#667085')};
  border-bottom: ${({ path }) => (path === '/particleEffect' ? '2px solid #A301DB' : '2px solid #667085')};
`;

export default Inventory;
