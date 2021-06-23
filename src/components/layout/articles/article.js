import Moment from "react-moment";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticles } from "../../../actions/article";
import { Link } from "react-router-dom";

import ArticleForm from "./articleForm";
import Footer from "../../shared/footer";
import NavBar from "../../shared/navbar";
import Message from "../../shared/message";
import ToTop from "../../shared/totop";
import setAuthToken from "../../../utils/setAuthToken";
//article
const Article = ({
  getArticles,
  article,
  therapist: { isAuthenticated_therapist, therapist, token },
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  console.log(article);

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container">
        <div className="heroSection__article">
          <div className="heroSection__article__text">
            <h3>Explore Our Articles</h3>
            <p>Take a quick review what our doctors say</p>
            <a href="#articleScroll">Explore</a>
          </div>
          <div className="heroSection__article__image">
            <img
              className="heroSection__article__image__img"
              src="/images/article.png"
            />
          </div>
        </div>
        <div className="Articles__header">
          <h2 id="articleScroll">Articles</h2>
        </div>
        {isAuthenticated_therapist && therapist ? <ArticleForm /> : ""}
        <div className="articles">
          {article?.articles.map((article) => (
            <div className="article" key={article._id}>
              <div>
                <img
                  src={article.ArticleImg || "/images/defaultArticleImg.png"}
                />
              </div>
              <div>
                <small>
                  <Moment format="YYYY/MM/DD">{article.date}</Moment>
                </small>
                <h4>{article.title}</h4>
                <p>{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Message></Message>
      <ToTop></ToTop>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.article,
  therapist: state.therapistAuth,
});

export default connect(mapStateToProps, {
  getArticles,
})(Article);
