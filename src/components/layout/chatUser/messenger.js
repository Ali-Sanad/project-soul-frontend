import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import NavBar from "../../shared/navbar";

import Conversation from "./conversation";
import Message from "./message";
import { Redirect } from "react-router-dom";
import {
  getConversations,
  setCurrentChatAction,
  addMessage,
} from "../../../actions/chat";

const MessengerUser = ({
  auth: { isAuthenticated, user },
  therapistAuth: { isAuthenticated_therapist, therapist },
  conversations,
  currentChat,
  getConversations,
  setCurrentChatAction,
  addMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [conversationId, setConversationId] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    getConversations(user?._id);
  }, [user]);

  const getCurrentChat = async (ConversationId) => {
    await setCurrentChatAction(ConversationId);
    setConversationId(ConversationId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      Sender: user._id,
      Text: newMessage,
      ConversationId: conversationId,
    };
    addMessage(message);
    setNewMessage("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat]);

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
                  <div onClick={() => getCurrentChat(conversation._id)}>
                    <Conversation
                      members={conversation.members}
                      user={user}
                      key={conversation._id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat && currentChat.length !== 0 ? (
                <>
                  <div className="chatBoxTop">
                    {currentChat.map((message) => {
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
                  </div>
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
    currentChat: state.chat?.currentChat,
    conversations: state.chat?.conversations,
  };
};

export default connect(mapStateToProps, {
  getConversations,
  setCurrentChatAction,
  addMessage,
})(MessengerUser);
