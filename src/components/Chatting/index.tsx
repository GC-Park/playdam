import React, { useState, useEffect } from 'react';
// import Typing from 'react-typing-animation';
import styled from 'styled-components';
import { CallGPT } from '../../api/gpt';

interface MessageProps {
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

const MessageList = ({ messages, isLoading }: { messages: MessageProps[]; isLoading: boolean }) => {
  return isLoading ? (
    <ChatMessageList><Message text='Loading...' isUser={true}></Message></ChatMessageList>
  ) : (
    <ChatMessageList>
      {messages.map((message: MessageProps) => {
        return (
          <Message key={`${message.text}-gpt`} text={message.text} isUser={message.isUser} isLoading={isLoading} />
        );
      })}
    </ChatMessageList>
  );
};

const Message = ({ text, isUser }: any) => {
  return isUser ? (
    <ChatUserMessage>
      <p>
        <b>User</b>: {text}
      </p>
    </ChatUserMessage>
  ) : (
    <ChatAiMessage>
      <p>
        <b>AI</b>: {text}
      </p>
    </ChatAiMessage>
  );
};

const MessageForm = ({ onSendMessage }: any) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <ChatMessageForm onSubmit={handleSubmit}>
      <ChatMessageInput
        type="text"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
      />
      <ChatSendButton type="submit">Send</ChatSendButton>
    </ChatMessageForm>
  );
};

export default Chatting;

const ChattingApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
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
`;
const ChatMessageList = styled.div`
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
`;

const ChatUserMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;

  align-self: flex-end;
  background: #2979ff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 16px 16px 0 16px;
`;

const ChatAiMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;

  align-self: flex-start;
  background: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 16px 16px 16px 0;
`;

const ChatMessageForm = styled.form`
  border-top: 1px solid #f0f0f0;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ChatMessageInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const ChatSendButton = styled.button`
  padding: 10px 20px;
  border-radius: 16px;
  border: none;
  background-color: #d237e9;
  color: #fff;
  cursor: pointer;
`;
const ChatTitle = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #d237e9;
  padding: 20px;
  margin: 0;
`;
