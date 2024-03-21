import styled from 'styled-components';
import { PlayItemProps } from '../../types/PlayItem';
import { useRef } from 'react';
import useModal from '../../hook/useModal';
import Modal from '../Modal';
import PlayItemInformation from '../PlayItemInformation';

function PlayItem(props: PlayItemProps) {
  const { id, title, location, time, image } = props;
  const modalRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <PlayItemWrapper onClick={openModal}>
        <PlayItemThumnail src={image} />
        <PlayItemInfo>
          <PlayItemTitle>{title}</PlayItemTitle>
          <PlayItemLocation>{location}</PlayItemLocation>
          <PlayItemTimeOfWeek>{time}</PlayItemTimeOfWeek>
        </PlayItemInfo>
      </PlayItemWrapper>
      {isModalOpen && (
        <Modal closeEvent={closeModal} dialogRef={modalRef}>
          <PlayItemInformation  closeEvent={closeModal} PlayItemProps={props} />
        </Modal>
      )}
    </>
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
  box-shadow: rgba(69, 69, 69, 0.1) 4px 4px 1px 0px;
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
