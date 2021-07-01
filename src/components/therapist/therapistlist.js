import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getTherapists } from "../../actions/therapists";

import TherapistCard from "./therapistcard";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Message from "../shared/message";
import ToTop from "../shared/totop";
import Pagination from "./pagination";
import SearchTherapist from "./search";
const TherapistList = ({ getTherapists, therapists }) => {
  const [filteredTherapists, setfilteredTherapists] = useState(therapists);
  const [currentPage, setCurrentPage] = useState(1);
  const [therapistsPerPage] = useState(8);

  useEffect(() => {
    getTherapists();
  }, [getTherapists]);
  useEffect(() => {
    setfilteredTherapists(therapists);
  }, [therapists]);

  // Get current posts
  const indexOfLastTherapist = currentPage * therapistsPerPage;
  const indexOfFirstTherapist = indexOfLastTherapist - therapistsPerPage;
  const currentTherapists = filteredTherapists.slice(
    indexOfFirstTherapist,
    indexOfLastTherapist
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="therapistlist">
        <h2 className="headers">Our Therapists</h2>
        <div className="container">
          <SearchTherapist
            setfilteredTherapists={setfilteredTherapists}
            therapistList={therapists}
          />
          <div className="row">
            {therapists &&
              currentTherapists.map((therapist) => (
                <div className="col-12 col-lg-3" key={therapist._id}>
                  <TherapistCard therapist={therapist}></TherapistCard>
                </div>
              ))}
          </div>
          <div>
            <Pagination
              therapistsPerPage={therapistsPerPage}
              totalTherapists={filteredTherapists.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Message />
      <ToTop />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  state: state,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted === "Accepted"
  ),
});

export default connect(mapStateToProps, { getTherapists })(TherapistList);
