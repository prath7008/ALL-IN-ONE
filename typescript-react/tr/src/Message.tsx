import React from "react";

interface UserMessage {
  name: string;
  message: string;
}
// const Message = (prop: { message: string }): any => {
const Message = (props: UserMessage): any => {
  return (
    <div>
      <p>This is a Quick Message</p>
      <p>
        {props.name},{props.message}
      </p>
    </div>
  );
};
export default Message;
