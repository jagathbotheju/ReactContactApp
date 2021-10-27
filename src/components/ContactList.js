import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const ContactList = ({
  contacts,
  deleteContact,
  searchHandler,
  searchTerm,
}) => {
  const [search, setSearch] = useState("");

  const getSearchTerm = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value;
    setSearch(searchTerm);
    searchHandler(searchTerm);
  };

  const resetSearch = () => {
    console.log("reset search");
    setSearch("");
    searchHandler("");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {/* heading and add contact */}
          <div className="col-md-10 d-flex justify-content-between mt-5">
            <h2> Contact List</h2>
            <Link to="/add">
              <button type="button" className="btn btn-primary">
                Add Contact
              </button>
            </Link>
          </div>
          {/* search */}
          <div className="col-md-10 mt-4">
            <div className="input-group mb-3">
              <input
                type="text"
                name="text"
                className="form-control shadow-none"
                placeholder="Search Contacts"
                aria-label="search contacts"
                aria-describedby="basic-addon2"
                value={search}
                onChange={getSearchTerm}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary shadow-none"
                  type="button"
                  onClick={() => resetSearch()}
                >
                  <MdClear size="1.5em" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            {contacts.length > 0
              ? contacts.map((contact) => {
                  return (
                    <ContactCard
                      contact={contact}
                      deleteContact={deleteContact}
                      key={contact.id}
                    />
                  );
                })
              : "No Contacts Available"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
