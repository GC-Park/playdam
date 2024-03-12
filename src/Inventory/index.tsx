import { useState } from 'react';
import styled from 'styled-components';

function Inventory() {
  const [isActive, setIsActive] = useState<boolean>(true);

  const ScheduleOnClick = () => {
    setIsActive(true);
    console.log(isActive) 
  };

  const reviewOnclick = () => {
    setIsActive(false);
    console.log(isActive)
  };

  return (
    <InventoryWrapper>
      <InventoryScheduleTap isActive={isActive} onClick={ScheduleOnClick}>연극 스케줄 모음</InventoryScheduleTap>
      <InventoryReviewTap isActive={isActive} onClick={reviewOnclick}>연극 후기 모음</InventoryReviewTap>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InventoryScheduleTap = styled.div<{ isActive: boolean }>`
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

  color: ${({isActive}) => isActive ? "#A301DB" : "#667085"};
  border-bottom: ${({isActive}) => isActive ? "2px solid #A301DB" : "2px solid #667085"};
`;

const InventoryReviewTap = styled.div<{ isActive: boolean }>`
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

  color: ${({isActive}) => !isActive ? "#A301DB" : "#667085"};
  border-bottom: ${({isActive}) => !isActive ? "2px solid #A301DB" : "2px solid #667085"};
`;

const InventoryName = styled.span``;

export default Inventory;
