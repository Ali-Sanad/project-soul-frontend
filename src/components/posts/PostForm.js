import React, { useRef, useState } from 'react';
import ImageSent from '../../assets/images/icons8_Sent 1.png';
import ImageUpload from '../../assets/images/surface1.png';
import ImageSearch from '../../assets/images/icons8_Search_4 3.png';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      addPost({ text });
      setText('');
      setImage(null);
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        addPost({ data: reader.result, text: text });
        console.log({ data: reader.result, text: text });
      };
      reader.onerror = () => {
        console.error('Image upload failed');
      };

      setText('');
      setImage(null);
    }
  };

  const fileInput = useRef(null);
  return (
    <>
      <div className='postForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 postForm__form'>
              <form>
                <input
                  type='text'
                  placeholder='What do you think about?'
                  className='postForm__input'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                <input
                  type='file'
                  name='image'
                  accept='image/png, image/jpeg'
                  onChange={(e) => onImageChange(e)}
                  style={{ display: 'none' }}
                  ref={fileInput}
                />
                <a onClick={() => fileInput.current.click()}>
                  <img src={ImageUpload} className='postForm__imageUpload' />
                </a>
                <a onSubmit={(e) => onSubmit(e)}>
                  <img src={ImageSent} className='postForm__imageSent' />
                </a>
              </form>
            </div>
            <div className='col-lg-12 postForm__inputs'>
              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type='text'
                placeholder='Search'
                className='postForm__inputs__search'
              />
              <a>
                <img src={ImageSearch} className='postForm__imageSearch' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
