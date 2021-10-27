import React from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <>
      <div className="card m-3 p-3 shadow">
        <div className="d-flex align-items-center">
          <div className="m-2">
            <BsPerson className="fa-3x" size="4em" />
          </div>
          <div className="m-2 flex-grow-1">
            <div className="class-body">
              {/* contact detail */}
              <Link
                to={{
                  pathname: "/detail",
                  state: { contact: contact },
                }}
              >
                <h5 className="card-title">{contact.name}</h5>
              </Link>
              <p className="card-text">{contact.email}</p>
            </div>
          </div>
          {/* edit contact */}
          <Link
            to={{
              pathname: "/edit",
              contact: contact,
            }}
          >
            <div className="me-4">
              <FaEdit size="2em" />
            </div>
          </Link>
          {/* deletecontact */}
          <div className="me-4">
            <RiDeleteBin5Line
              color="red"
              size="2em"
              onClick={() => deleteContact(contact.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
