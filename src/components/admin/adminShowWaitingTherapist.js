import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTherapists } from "../../actions/therapists";
import { createTherapistProfile } from "../../actions/therapistProfile";
import AdminTherapistCard from "./admintherapistcard";

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
const AdminShowWaitingTherapists = ({
  getTherapists,
  createTherapistProfile,
  therapists,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);

  console.log("therapistsssssss", therapists);
  return (
    <>
      {therapists && therapists.length > 0 && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>IMG</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">accept</TableCell>
                <TableCell align="right">Reject</TableCell>
                <TableCell align="right">More</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {therapists.map((th) => (
                <TableRow key={th._id}>
                  <TableCell component="th" scope="row">
                    {"img"}
                  </TableCell>
                  <TableCell align="right">{th?.fname}</TableCell>
                  <TableCell align="right">{th?.lname}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <button
                      className="btn "
                      onClick={() => {
                        createTherapistProfile(
                          { isAccepted: "Accepted" },
                          th._id
                        );
                        getTherapists();
                      }}
                    >
                      Accept
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="btn "
                      onClick={() => {
                        createTherapistProfile(
                          { isAccepted: "Rejected" },
                          th._id
                        );
                        getTherapists();
                      }}
                    >
                      Rejected
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <AdminTherapistCard therapist={th}>
                      <i className="fas fa-edit fas fa-1x text-soul-200"></i>
                    </AdminTherapistCard>
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
  //  oneTherapist: state.oneTherapist,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted == "Pending"
  ),
  // therapist: state.therapistAuth,
});
export default connect(mapStateToProps, {
  getTherapists,
  createTherapistProfile,
})(AdminShowWaitingTherapists);
