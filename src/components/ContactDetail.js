import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;

  return (
    <div className="container text-centergit mt-5" style={{ width: "18rem" }}>
      <div className="card">
        <BsPerson size="15em" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
      <div className="container text-center m-3">
        <Link to="/">
          <div className="btn btn-primary btn-sm">Back to List</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
