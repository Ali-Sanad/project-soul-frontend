import "./message.css";

const Message = ({ own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src="https://i.pinimg.com/564x/9b/59/6d/9b596d304c2d0816c49a3e031ff2b48f.jpg"
            className="messageImg"
            alt=""
          />
          <p className="messageText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit
            dolor quas omnis recusandae, debitis molestiae optio eum, distinctio
            ad voluptatem ex perferendis voluptatum facilis minima excepturi
            adipisci illum in.
          </p>
        </div>
        <div className="messageBottom"> 1 hour ago</div>
      </div>
    </>
  );
};

export default Message;
