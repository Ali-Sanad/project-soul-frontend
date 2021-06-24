import { useState } from "react";
import { connect } from "react-redux";

import { addArticle } from "../../../actions/article";

const ArticleForm = ({ addArticle }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  console.log(content);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      addArticle({ data: reader.result, content, title });
      console.log({ data: reader.result, content: content, title: title });
    };
    reader.onerror = () => {
      console.error("Article failed");
    };

    setContent("");
    setTitle("");
    setImage("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image">Choose an Article image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <input type="reset" value="Reset" />
      </form>
    </>
  );
};

export default connect(null, {
  addArticle,
})(ArticleForm);
