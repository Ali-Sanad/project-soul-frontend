import React from "react";
import { useEffect } from "react";

import { connect } from "react-redux";
import { getTherapists } from "../../actions/therapists";
import { updateTherapistForm } from "../../actions/therapistProfile";
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
  updateTherapistForm,
  therapists,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);

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
                <TableCell align="right">Licence</TableCell>
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
                    <img src={th?.uploadCv} alt="" />
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <button
                      className="btn "
                      onClick={() => {
                        updateTherapistForm({ isAccepted: "Accepted" }, th._id);
                        getTherapists();
                      }}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="btn "
                      onClick={() => {
                        updateTherapistForm({ isAccepted: "Rejected" }, th._id);
                        getTherapists();
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <AdminTherapistCard therapist={th}>
                      <i className="fas fa-info"></i>
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
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted === "Pending"
  ),
});
export default connect(mapStateToProps, {
  getTherapists,
  updateTherapistForm,
})(AdminShowWaitingTherapists);
