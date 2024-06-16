import { RefObject, useEffect, useRef } from "react";
import { MessageProps } from "../Chatting";
import { styled } from "styled-components";
import Message from "../Message";

const MessageList = ({ messages, isLoading }: { messages: MessageProps[]; isLoading: boolean }) => {
  const scrollRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return isLoading ? (
    <ChatMessageList>
      <Message text="Loading..." isUser={true} />
    </ChatMessageList>
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

const ChatMessageList = styled.div`
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
`;

export default MessageList