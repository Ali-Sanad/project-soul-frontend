import axios from "axios";
import { useEffect, useState } from "react";

const Conversation = ({ conversationMembers: { members }, currentUser }) => {
  console.log("members", members);

  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const therapistId = members.find((member) => member !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/therapist/" + therapistId
        );
        console.log(res.data);
        setUser(res.data.therapist);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, members]);

  return (
    <>
      <div className="conversation">
        <img
          src={(user && user.userImg) || "\noAvatar.gif"}
          className="conversationImg"
          alt=""
        />
        <span className="conversationName">{user ? user.fname : ""}</span>
      </div>
    </>
  );
};

export default Conversation;
