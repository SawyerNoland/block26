import React from "react"; 
import { useState } from 'react'

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td className="table-hover">{contact.name}</td>
      <td className="table-hover">{contact.email}</td>
      <td className="table-hover">{contact.phone}</td>
    </tr>
  );
}