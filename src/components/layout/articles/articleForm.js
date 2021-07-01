import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

import { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../../actions/article";

const ArticleForm = ({ addArticle }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setContent("");
    setTitle("");
    setImage("");
    setPreviewImage(null);
    setOpen(false);
  };

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && title && content) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        addArticle({ data: reader.result, content, title });
      };
      reader.onerror = () => {};
      handleClose();
    }
  };

  return (
    <>
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Write Article
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Sharing is Caring! :)
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              margin="dense"
              id="name"
              multiline
              rows={9}
              defaultValue=""
              variant="outlined"
              label="Write..."
              type="text"
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label for="files" style={{ cursor: "pointer" }}>
              Add Image
              {previewImage ? (
                <img src={previewImage} alt="Preview" />
              ) : (
                <InsertPhotoIcon />
              )}
            </label>

            <input
              type="file"
              id="files"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
              }}
              style={{ visibility: "hidden" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={handleSubmit}>
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default connect(null, {
  addArticle,
})(ArticleForm);
