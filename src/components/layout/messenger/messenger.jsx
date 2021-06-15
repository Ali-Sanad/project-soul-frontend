import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Conversation from "../../conversation/conversation";
import Message from "../..//message/message";
import "./messenger.css";

const Messenger = ({ user }) => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  // determine user => will be fetched from redux
  console.log(user);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "https://project-soul-api.herokuapp.com/api/conversations/" + user._id
        );
        console.log(res.data);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
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

  return (
    <>
      <div className="messenger">
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
                      <div>
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
                  ></textarea>

                  <button className="chatSubmitButton">Send</button>
                </div>{" "}
              </>
            ) : (
              <span className="NoConversation"> Select Conversation</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(Messenger);
