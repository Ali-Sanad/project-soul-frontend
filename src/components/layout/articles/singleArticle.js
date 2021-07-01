import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import {useParams} from 'react-router-dom';
import Footer from '../../shared/footer';
import NavBar from '../../shared/navbar';
import Message from '../../shared/message';
import ToTop from '../../shared/totop';
import {connect} from 'react-redux';
import {getArticle} from '../../../actions/article';
import {useEffect} from 'react';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const SingleArticle = ({article: {article}, getArticle}) => {
  const classes = useStyles();
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    getArticle(id);
  }, [getArticle, id]);

  return (
    <>
      <div className='container-fluid'>
        <NavBar />

        <div className='container'>
          {article && (
            <>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label='therapistImg'
                      src={article.therapistImg}
                    ></Avatar>
                  }
                  title={article.name}
                  subheader={
                    <Moment format='YYYY/MM/DD'>{article.date}</Moment>
                  }
                />
                <CardMedia
                  className={classes.media}
                  image={article.ArticleImg}
                  title='ArticleImg'
                />
                <CardContent>
                  <Typography variant='body2' component='p'>
                    {/* {htmlToText(article.content)} */}
                    {article.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing></CardActions>
              </Card>
            </>
          )}
        </div>
        <Footer />
        <Message />
        <ToTop />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, {getArticle})(SingleArticle);
