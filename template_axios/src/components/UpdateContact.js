
import React, { useCallback } from 'react'

function AddContact( props ) {

    const { contact, setContact, updateContact } = props;
    const changeContact = useCallback( (evt) => setContact({...contact, [evt.target.name]: evt.target.value}), [contact, setContact] )
    
    return (
        <div className="container-fluid">
            <h3>Update Contact</h3>

            <div>
                Name: <input type="text" className="form-control" name="name" 
                    value={contact.name} onChange={changeContact} />
                Tel: <input type="text" className="form-control" name="tel" 
                    value={contact.tel}  onChange={changeContact}/>
                Address: <input type="text" className="form-control" name="address"
                    value={contact.address}  onChange={changeContact} />
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={ () => updateContact(contact) }>ADD</button>
        </div>
    )
}

export default AddContact
