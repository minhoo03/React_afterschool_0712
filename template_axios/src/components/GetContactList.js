
import React from 'react'
import {Link} from 'react-router-dom'

const GetContactList = (props) => {

    const {contactList, getContact} = props;

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { contactList && contactList.map( contact => (
                        <tr key={contact.no}>
                            <td>{contact.no}</td>
                            <td><Link to="#" onClick={() => getContact(contact.no)}>{contact.name}</Link></td>
                            <td>{contact.tel}</td>
                            <td>{contact.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetContactList
