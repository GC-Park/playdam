import { styled } from 'styled-components';

const Message = ({ text, isUser }: any) => {
  const parseMessage = (text: string) => {
    const urlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        // Ensure the URL uses https
        const imageUrl = part.startsWith('http://') ? part.replace('http://', 'https://') : part;
        return <img key={index} src={imageUrl} alt="image" style={{ maxWidth: '100%', height: 'auto' }} />;
      }
      return part;
    });
  };

  return isUser ? (
    <ChatUserMessage>
      <p>
        <b>User</b>: {text}
      </p>
    </ChatUserMessage>
  ) : (
    <ChatAiMessage>
      <p>
        <b>AI</b>: {parseMessage(text)}
      </p>
    </ChatAiMessage>
  );
};

const ChatUserMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  width: fit-content;
  display: block;

  align-self: flex-end;
  background: #2979ff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 16px 16px 0 16px;
  word-break: break-word;
`;

const ChatAiMessage = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  width: fit-content;
  display: block;

  align-self: flex-start;
  background: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 16px 16px 16px 0;
  word-break: break-word;
`;

export default Message;
