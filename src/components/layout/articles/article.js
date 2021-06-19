import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticles } from "../../../actions/article";
import { Link } from "react-router-dom";

const Article = ({ getArticles, article }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  console.log(article);

  return (
    <div className="container">
      <div className="heroSection__article row">
        <div className="heroSection__article__text">
          <h4>Explore Our Articles</h4>
          <p>Take a quick review what our doctors say</p>
          <button>Explore</button>
        </div>
        <div className="heroSection__article__img">
          <img src="\article.png" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, {
  getArticles,
})(Article);
