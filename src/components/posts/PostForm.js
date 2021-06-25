import React, { useRef, useState } from 'react';
import ImageSent from '../../assets/images/icons8_Sent 1.png';
import ImageUpload from '../../assets/images/surface1.png';
import { connect } from 'react-redux';

import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      addPost({ text });
      setText("");
      setImage(null);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        addPost({ data: reader.result, text: text });
        console.log({ data: reader.result, text: text });
      };
      reader.onerror = () => {
        console.error("Image upload failed");
      };

      setText("");
      setImage(null);
    }
  };

  const fileInput = useRef(null);
  return (
    <>
      <div className="postForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 postForm__form">
              <form>
                <input
                  type="text"
                  placeholder="What do you think about?"
                  className="postForm__input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                <input
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={(e) => onImageChange(e)}
                  style={{ display: "none" }}
                  ref={fileInput}
                />
                <a onClick={() => fileInput.current.click()}>
                  <img src={ImageUpload} className="postForm__imageUpload" />
                </a>
                <button onSubmit={(e) => onSubmit(e)}>
                  <img src={ImageSent} className="postForm__imageSent" />
                </button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};



export default connect(null, { addPost })(PostForm);
