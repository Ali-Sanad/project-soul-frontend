import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticles } from "../../../actions/article";
import { Link } from "react-router-dom";

const Article = ({ getArticles, article }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  console.log(article);

  return <div className="container">Article works</div>;
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, {
  getArticles,
})(Article);
