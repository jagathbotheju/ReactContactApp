import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-4">
            <h2> Contact List</h2>
            <Link to="/add">
              <button type="button" className="btn btn-sm btn-primary">
                Add Contact
              </button>
            </Link>
            {contacts.map((contact) => {
              return (
                <ContactCard
                  contact={contact}
                  deleteContact={deleteContact}
                  key={contact.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
