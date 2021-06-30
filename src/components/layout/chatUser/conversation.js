import axios from "axios";
import { useEffect, useState } from "react";
import noAvatar from "../../../assets/images/noAvatar.gif";

const Conversation = ({ members, user }) => {
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
      <div className="conversation">
        <img
          src={(therapist && therapist.therapistImg) || noAvatar}
          className="conversationImg"
          alt="conversationsImg"
        />
        <span className="conversationName">
          {therapist ? therapist.fname + therapist.lname : ""}
        </span>
      </div>
    </>
  );
};

export default Conversation;
