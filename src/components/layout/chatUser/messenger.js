import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import NavBar from "../../shared/navbar";

import Conversation from "./conversation";
import Message from "./message";
import { Redirect } from "react-router-dom";
import { getConversations } from "../../../actions/chat";
const MessengerUser = ({
  auth: { isAuthenticated, user },
  therapistAuth: { isAuthenticated_therapist, therapist },
  conversations,
  getConversations,
}) => {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const scrollRef = useRef();

  console.log(user);

  useEffect(() => {
    getConversations(user?._id);
  }, [user]);

  console.log(currentChat);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/messages/" +
            currentChat._id
        );
        console.log(res.data);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(messages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      Sender: user._id,
      Text: newMessage,
      ConversationId: currentChat._id,
    };
    try {
      const res = await axios.post(
        "https://project-soul-api.herokuapp.com/api/messages/",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="messenger">
          {!isAuthenticated && !user && <Redirect to="/" />}
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              {conversations.map((conversation) => {
                return (
                  <div onClick={() => setCurrentChat(conversation)}>
                    <Conversation
                      conversationMembers={conversation}
                      currentUser={user}
                      key={conversation._id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  {" "}
                  <div className="chatBoxTop">
                    {messages.map((message) => {
                      return (
                        <div ref={scrollRef}>
                          <Message
                            message={message}
                            own={message.Sender === user._id}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      rows="3"
                      placeholder="Write Some Thing..."
                      className="chatMessageInput"
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>

                    <button className="chatSubmitButton" onClick={handleSubmit}>
                      Send
                    </button>
                  </div>{" "}
                </>
              ) : (
                <span className="NoConversation"> Select Conversation</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    therapistAuth: state.therapistAuth,
    conversations: state.chat?.conversations,
  };
};

export default connect(mapStateToProps, { getConversations })(MessengerUser);
