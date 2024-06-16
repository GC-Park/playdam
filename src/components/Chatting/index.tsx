import React, { useState, useEffect, useRef, RefObject } from 'react';
// import Typing from 'react-typing-animation';
import styled from 'styled-components';
import { CallGPT } from '../../api/gpt';
import MessageList from '../\bMessageList';
import MessageForm from '../MessageForm';

export interface MessageProps {
  text: string;
  isUser: boolean;
}

const Chatting = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    try {
      setIsLoading(true);
      const gptMessage = await CallGPT(message);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: message, isUser: true },
        { text: gptMessage, isUser: false },
      ]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChattingApp>
      <ChattingBox>
        <ChatTitle>PlayDam Chat</ChatTitle>
        <MessageList messages={messages} isLoading={isLoading} />
        <MessageForm onSendMessage={handleSendMessage} />
      </ChattingBox>
    </ChattingApp>
  );
};

export default Chatting;

const ChattingApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const ChattingBox = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 400px;
    height: 500px;
  }

  @media screen and (max-width: 430px) {
    width: 330px;
    height: 400px;
  }
`;

const ChatTitle = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #d237e9;
  padding: 20px;
  margin: 0;
`;
