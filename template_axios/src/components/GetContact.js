
import React, { useCallback } from 'react'
import { useHistory } from 'react-router';

function AddContact(props) {

    const {contact, deleteContact} = props;
    const history = useHistory();

    const goUpdateView = useCallback( () => {
        history.push('/updateContact')
    }, [history])

    return (
        <div className="container-fluid">
            <h3>Get Contact</h3>

            <div>
                Name: <input type="text" className="form-control" disabled defaultValue={contact.name} />
                Tel: <input type="text" className="form-control" disabled defaultValue={contact.tel} />
                Address: <input type="text" className="form-control" disabled defaultValue={contact.address} />
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={goUpdateView}>수정</button>
            <button className="btn btn-outline-primary" onClick={ () => deleteContact(contact.no)}>삭제</button>
        </div>
    )
}

export default AddContact
