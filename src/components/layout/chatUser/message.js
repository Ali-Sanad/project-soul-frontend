import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import noAvatar from "../../../assets/images/noAvatar.gif";

const Message = ({ message, own, user, members }) => {
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    const therapistId = members.find((member) => member !== user._id);
    const getTherapist = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/therapist/" + therapistId
        );
        setTherapist(res.data.therapist);
      } catch (err) {}
    };
    getTherapist();
  }, [user, members]);

  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src={
              own
                ? user.userImg || noAvatar
                : (therapist && therapist.therapistImg) || noAvatar
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
