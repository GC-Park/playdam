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

  const reviewOnclick = () => {
    navigate('/review');
  };

  return (
    <InventoryWrapper>
      <InventoryScheduleTap path={path} onClick={ScheduleOnClick}>
        연극 스케줄 모음
      </InventoryScheduleTap>
      <InventoryReviewTap path={path} onClick={reviewOnclick}>
        연극 후기 모음
      </InventoryReviewTap>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.div`
  display: flex;
  margin-top: 20px;
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

  color: ${({ path }) => (path === '/review' ? '#A301DB' : '#667085')};
  border-bottom: ${({ path }) => (path === '/review' ? '2px solid #A301DB' : '2px solid #667085')};
`;

const InventoryName = styled.span``;

export default Inventory;
