import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import noAvatar from "../../../assets/images/noAvatar.gif";

const Message = ({ message, own, therapist, members }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = members.find((member) => member !== therapist._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/auth/" + userId
        );
        setUser(res.data);
      } catch (err) {}
    };
    getUser();
  }, [therapist, members]);

  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src={
              own
                ? (therapist && therapist.therapistImg) || noAvatar
                : (user && user.userImg) || noAvatar
            }
            className="messageImg"
            alt="sender"
          />
          <p className="messageText">{message.Text}</p>
        </div>
        <div className="messageBottom"> {format(message.createdAt)}</div>
      </div>
    </>
  );
};

export default Message;
