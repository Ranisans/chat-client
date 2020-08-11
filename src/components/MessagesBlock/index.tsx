import React, { useEffect, useState, useRef } from "react";

import Message from "../Message";

import { IMessagesBlock } from "../../types";

import "./MessagesBlock.scss";

const MessagesBlock: React.FC<IMessagesBlock> = ({
  messages,
  currentUserName,
  rowHeight,
  viewportHeight,
  callback,
}: IMessagesBlock) => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const rowsCount = messages.length;
  const totalHeight = rowsCount * rowHeight;
  const renderAhead = 5;

  let startNode = Math.floor(scrollTop / rowHeight) - renderAhead;
  startNode = Math.max(0, startNode);

  let visibleNodesCount =
    // 2 - because rows in buffer above and below
    Math.ceil(viewportHeight / rowHeight) + 2 * renderAhead;
  visibleNodesCount = Math.min(rowsCount - startNode, visibleNodesCount);

  const onScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation();
    setScrollTop(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    setScrollTop(0);
    const { current } = scrollRef;
    if (current) {
      setScrollTop(totalHeight);
      current.scroll({ top: totalHeight, left: 0 });
    }
  }, [messages, totalHeight]);

  const offsetY = startNode * rowHeight;

  const visibleMessages = messages.slice(
    startNode,
    startNode + visibleNodesCount
  );

  return (
    <div
      className="messages_table"
      onScroll={onScroll}
      style={{ height: viewportHeight }}
      ref={scrollRef}
    >
      <div className="messages_table-viewport" style={{ height: totalHeight }}>
        <div
          style={{
            willChange: "transform",
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleMessages.map((singleMessageData) => (
            <Message
              id={singleMessageData.id}
              avatar={singleMessageData.avatar}
              name={singleMessageData.name}
              text={singleMessageData.text}
              isCurrentUser={singleMessageData.name === currentUserName}
              callback={callback}
              key={singleMessageData.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesBlock;
