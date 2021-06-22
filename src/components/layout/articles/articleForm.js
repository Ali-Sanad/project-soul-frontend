import { useState } from "react";
import { connect } from "react-redux";

import { addArticle } from "../../../actions/article";

const ArticleForm = ({ addArticle }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  console.log(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // addArticle({ content, title: "testtttttttttt" });
    // const formData = { content, image, title: "testtttttttttt" };
    // console.log(formData);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      addArticle({ data: reader.result, content, title: "new" });
      console.log({ data: reader.result, content: content, title: "new" });
    };
    reader.onerror = () => {
      console.error("Article failed");
    };

    setContent("");
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
        <label for="image">Choose an Article image:</label>
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
