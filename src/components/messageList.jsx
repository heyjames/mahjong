import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <span style={{ float: "left", width: "180px" }}>
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: "yellow", marginBottom: "2px", width: "170px" }}
          >
            {message}
          </div>
        )
      })}
    </span>
  );
}

export default MessageList;