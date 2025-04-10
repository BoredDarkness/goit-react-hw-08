import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <h2>Your Contacts</h2>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
