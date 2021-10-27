import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";

function EditContact({ history, updateContact, location }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  //const { name, email } = location.contact;

  useEffect(() => {
    setName(location.contact.name);
    setEmail(location.contact.email);
    setId(location.contact.id);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    updateContact({ id, name, email });
    setName("");
    setEmail("");
    history.push("/"); //return to Home
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-4">
            <h2>Add Contact</h2>
            <form onSubmit={onSubmit}>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary me-3">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => history.push("/")}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditContact;
