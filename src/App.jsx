import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/contactList'

function App() {
  const [count, setCount] = useState(0)
  const [contacts, setContacts] = useState(dummyContacts)

  return (
    <>
      <ContactList/>
    </>
  )
}

export default App
