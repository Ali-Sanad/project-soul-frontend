import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src="https://i.pinimg.com/564x/9b/59/6d/9b596d304c2d0816c49a3e031ff2b48f.jpg"
            className="messageImg"
            alt=""
          />
          <p className="messageText">{message.Text}</p>
        </div>
        <div className="messageBottom"> {format(message.createdAt)}</div>
      </div>
    </>
  );
};

export default Message;
