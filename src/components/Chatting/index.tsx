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
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      text: '안녕하세요. 연극 관련 정보를 제공하는 챗봇 플레이담입니다. 연극에 관해 궁금한 사항이 있으시면 무엇이든 물어봐주세요.',
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    try {
      setIsLoading(true);

      setMessages(prevMessages => [
        ...prevMessages,
        { text: message, isUser: true },
        { text: 'Loading...', isUser: false },
      ]);

      const gptMessage = await CallGPT(message);

      setMessages(prevMessages => {
        const newMessages = [...prevMessages];
        newMessages[newMessages.length - 1] = { text: gptMessage, isUser: false };
        return newMessages;
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
      localStorage.setItem('chatgpt', JSON.stringify(messages));
    }
  };

  useEffect(() => {
    const localMessage = localStorage.getItem('chatgpt');
    if (localMessage !== null) {
      const parsedMessage = JSON.parse(localMessage);
      setMessages(parsedMessage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatgpt', JSON.stringify(messages));
  }, [messages]);

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
