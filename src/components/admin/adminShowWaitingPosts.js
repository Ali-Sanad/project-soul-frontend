import React from "react";
import { useEffect } from "react";

import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { updatePost } from "../../actions/post";
import AdminPostCard from "./adminpostcard";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const AdminShowWaitingTherapists = ({ getPosts, updatePost, posts }) => {
  const classes = useStyles();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {posts && posts.length > 0 && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>IMG</TableCell>
                <TableCell align="right">Name</TableCell>

                <TableCell align="right">accept</TableCell>
                <TableCell align="right">Reject</TableCell>
                <TableCell align="right">More</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((p) => (
                <TableRow key={p._id}>
                  <TableCell component="th" scope="row">
                    {"img"}
                  </TableCell>
                  <TableCell align="right">{p?.name}</TableCell>

                  <TableCell align="right">
                    {" "}
                    <button
                      className="btn "
                      onClick={() => {
                        updatePost({ isAccepted: "Accepted" }, p._id);
                        getPosts();
                      }}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="btn "
                      onClick={() => {
                        updatePost({ isAccepted: "Rejected" }, p._id);
                        getPosts();
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <AdminPostCard post={p}>
                      <i className="fas fa-info"></i>
                    </AdminPostCard>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  state: state,
  posts: state.post?.posts.filter((post) => post.isAccepted === "Pending"),
});
export default connect(mapStateToProps, {
  getPosts,
  updatePost,
})(AdminShowWaitingTherapists);
