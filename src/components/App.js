import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import api from "../api/contacts";

//https://www.youtube.com/watch?v=QoJGKwo20is&list=PLTP3E5bPW7944Ec1lfXzavqRHzxY5FigD&index=2
//yt_dipesh_malvia

function App() {
  //const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //*ADD contact to api
  const addContact = async (contact) => {
    const response = await api.post("/contacts", contact);
    setContacts([...contacts, response.data]);
    //console.log(contact);
  };

  //*DELETE contact from api
  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    console.log(`deleting contact ${id}`);
  };

  //*GET contact by Id from api
  const getContactById = async (id) => {
    const response = await api.get(`/contacts/${id}`);
    return response.data;
  };

  //*GET all contacts from api
  const getAllContacts = async () => {
    const allContacts = await api.get("/contacts");
    if (allContacts) {
      setContacts(allContacts.data);
    } else {
      setContacts([]);
    }
  };

  //*UPDATE contact
  const updateContact = async (contact) => {
    console.log(`update contact ${contact.id}`);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/*ContactList */}
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList contacts={contacts} deleteContact={deleteContact} />
            )}
          />
          {/*AddContact */}
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContact={addContact} />
            )}
          />
          {/*ContactDetail */}
          <Route path="/detail" component={ContactDetail} />
          {/* UpdaetDetail */}
          <Route
            path="/edit"
            render={(props) => (
              <EditContact {...props} updateContact={updateContact} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
