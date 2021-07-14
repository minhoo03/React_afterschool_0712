
import React from 'react'
import {Link} from 'react-router-dom'

function ContactHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Contact</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Contact HOME</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/getContactList" className="nav-link">Get Contact List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addContact" className="nav-link">Add Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default ContactHeader
