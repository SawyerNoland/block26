import { useState} from 'react'
import './App.css'
import ContactList from './components/contactList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}
