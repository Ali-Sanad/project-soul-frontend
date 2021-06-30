import axios from "axios";
import { useEffect, useState } from "react";
import noAvatar from "../../../assets/images/noAvatar.gif";

const Conversation = ({ members, therapist }) => {
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
      <div className="conversation">
        <img
          src={(user && user.userImg) || noAvatar}
          className="conversationImg"
          alt="conversationsImg"
        />
        <span className="conversationName">
          {user && user.name ? user.name : ""}
        </span>
      </div>
    </>
  );
};

export default Conversation;
