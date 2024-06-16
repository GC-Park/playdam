import { styled } from 'styled-components';

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

const ChatUserMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  width: auto;
  display: inline-block;

  align-self: flex-end;
  background: #2979ff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 16px 16px 0 16px;
  word-break: break-word
`;

const ChatAiMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  width: auto;
  display: inline-block;

  align-self: flex-start;
  background: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 16px 16px 16px 0;
  word-break: break-word
`;

export default Message;
