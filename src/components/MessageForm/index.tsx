import { useState } from "react";
import { styled } from "styled-components";

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

export default MessageForm;