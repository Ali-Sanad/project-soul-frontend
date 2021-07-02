import Moment from "react-moment";
import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteArticle, getArticles } from "../../../actions/article";
import { Link } from "react-router-dom";

import ArticleForm from "./articleForm";
import Footer from "../../shared/footer";
import NavBar from "../../shared/navbar";
import Message from "../../shared/message";
import ToTop from "../../shared/totop";

import Button from "@material-ui/core/Button";

import articleImg from "../../../assets/images/article.png";

//article
const Article = ({
  getArticles,
  article,
  therapist: { isAuthenticated_therapist, therapist, token },
  deleteArticle,
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

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
              src={articleImg}
              alt="articleImage"
            />
          </div>
        </div>
        <div className="Articles__header">
          <h2 id="articleScroll">Articles</h2>
        </div>
        <div style={{ textAlign: "right" }}>
          {isAuthenticated_therapist && therapist ? <ArticleForm /> : ""}
        </div>

        <div className="articles">
          {article?.articles.map((article) => (
            <>
              <div className="article" key={article._id}>
                <div className="article__image">
                  <img src={article.ArticleImg} alt="SingleArticleImage" />
                </div>
                <div className="article__paragraph">
                  <small>
                    <Moment format="YYYY/MM/DD">{article.date}</Moment>
                  </small>
                  <h4>{article.title}</h4>
                  <p>{article.content}</p>
                  <Link to={`/article/${article._id}`}>Learn More</Link>
                  {therapist && article.therapist === therapist._id ? (
                    <>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          deleteArticle(article._id);
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
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
  deleteArticle,
})(Article);
