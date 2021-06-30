import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getPosts } from "../../actions/post";
import { updatePost } from "../../actions/post";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const AdminPostCard = ({ children, getPosts, post }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {children}
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title headers">More Info</h2>
            <div id="transition-modal-description">
              <React.Fragment>
                <div className="adminpostcard">
                  <div className="postCard">
                    <div className="card mb-3 postCard__card">
                      <img
                        src={post?.postImage}
                        className="card-img-top postCard__image"
                        alt=""
                      />
                      <div className="card-body">
                        <p className="card-text">{post?.name}</p>
                        <p className="card-text">
                          <small className="text-muted">{post?.text}</small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">{post?.date}</small>
                        </p>
                      </div>
                      <hr></hr>
                      <div className="adminpostcard__btns"></div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default connect(null, { getPosts, updatePost })(AdminPostCard);
