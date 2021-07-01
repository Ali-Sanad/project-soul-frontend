import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import { connect } from "react-redux";
import { contactUsAction } from "../../actions/auth";
const Contact = ({ contactUsAction }) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
    email: "",
    phone: "",
  });
  const { subject, message, name, email, phone } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    contactUsAction(formData);
    setFormData({
      subject: "",
      message: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <div className="contact__header">
            <h2 className="headers">Contact Us</h2>
          </div>
          <div className="row">
            <div
              className="col-12 col-md-6 contact__form wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <form onSubmit={(e) => onSubmit(e)}>
                <input
                  type="text"
                  className="input"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  required
                  onChange={(e) => onChange(e)}
                />
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={(e) => onChange(e)}
                  rows="7"
                  className="input"
                  placeholder="Leave your message here..."
                />

                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Phone number"
                  required
                  name="phone"
                  value={phone}
                  onChange={(e) => onChange(e)}
                />

                <button className="mainbtn" type="submit">
                  Contact Us
                </button>
              </form>
            </div>
            <div
              className="col-12 col-md-6 contact__image wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <img src="./images/contact.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { contactUsAction })(Contact);
