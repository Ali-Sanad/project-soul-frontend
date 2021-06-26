import axios from "axios";
import { useEffect, useState } from "react";
import noAvatar from "../../../assets/images/noAvatar.gif";

const Conversation = ({ members, therapist }) => {
  console.log("members", members);

  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const userId = members.find((member) => member !== therapist._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/auth/" + userId
        );
        console.log(res.data);
        setUser(res.data);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
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
