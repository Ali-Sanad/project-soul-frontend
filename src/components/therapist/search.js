import React, { useState, useEffect } from "react";
import ImageSearch from "../../assets/images/icons8_Search_4 3.png";
import { getTherapists } from "../../actions/therapists";
import { connect } from "react-redux";

const SearchTherapist = ({
  setfilteredTherapists,
  therapistList,
  getTherapists,
}) => {
  const [searchValue, setSearch] = useState("");
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);

    let searchTherapists;
    if (e.target.value === "") {
      searchTherapists = therapistList;
    } else {
      searchTherapists = therapistList.filter((th) => {
        return (
          th.fname.toLowerCase().includes(e.target.value.toLowerCase()) ||
          th.lname.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
    }

    return setfilteredTherapists(searchTherapists);
  };
  return (
    <>
      <div className="postForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 postForm__inputs">
              <input
                type="text"
                placeholder="Search"
                className="postForm__inputs__search inputstyle"
                value={searchValue}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <span>
                <img
                  src={ImageSearch}
                  className="postForm__imageSearch"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, {
  getTherapists,
})(SearchTherapist);
