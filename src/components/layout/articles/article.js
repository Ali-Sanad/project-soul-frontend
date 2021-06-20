import Moment from "react-moment";
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
      <div className="heroSection__article">
        <div className="heroSection__article__text">
          <h4>Explore Our Articles</h4>
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
        <span id="articleScroll">Articles</span>
      </div>
      <div className="articles">
        {article?.articles.map((article) => {
          return (
            <>
              <div className="article">
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
            </>
          );
        })}
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
