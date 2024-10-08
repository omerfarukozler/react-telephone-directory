import { useEffect, useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form({ addContact, contacts }) {

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false
        }
        addContact([...contacts, form])
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullname'
                    placeholder='Full Name'
                    onChange={onChangeInput}
                    value={form.fullname}
                />
            </div>
            <div>
                <input
                    name='phone_number'
                    placeholder='Phone Number'
                    onChange={onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div>
                <button style={{display:'flex', justifyContent:'flex-end',alignItems:'center',padding:'10px 15px', marginLeft:'343px',marginTop:'15px', color:'Background',backgroundColor:'GrayText'}}>Add</button>
            </div>
        </form>
    )
}

export default Form
