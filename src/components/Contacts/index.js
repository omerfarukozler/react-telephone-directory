import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"
function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Ömer",
            phone_number:"12345678901"
        },
        {
            fullname:"Faruk",
            phone_number:"98765432101"
        },
        {
            fullname:"Muhammed",
            phone_number:"25987632547"
        },
        {
            fullname:"Rıdvan",
            phone_number:"96325874125"
        }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <h2>Contacts</h2>
            <List
            contacts={contacts}
             />
            <Form 
            addContact={setContacts} 
            contacts={contacts} 
            />
        </div>
    )
}

export default Contacts
