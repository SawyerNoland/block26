import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './component/ContactList';
import ContactRow from './component/ContactRow';

// const [contacts, setContacts] = useState(dummyContacts)

//we want to create a new fucntion that populates the selected info (onClick()) into a new div that displays only the selected individuals data

function App() {
  const [contacts, setContacts] = useState([])
  const [selectedContactId, setSelectedContactId] = useState(null)
  const  featuredContact = contacts.find((contact) => contact.id === selectedContactId)

useEffect(() => {
    async function fetchContacts(){
        try {
            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
            const result = await response.json();
            setContacts(result)
        } catch (error) {
            console.log(error);
        }
    }
    fetchContacts()
}, []);
  
  return (
    <>
    <div className="table-container">
      <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId}/>
    </div>
    {selectedContactId && (
      <div className='selected-info'>{featuredContact.name} {featuredContact.email} {featuredContact.phone}</div>
    )}
 
    </>
  );
}


export default App