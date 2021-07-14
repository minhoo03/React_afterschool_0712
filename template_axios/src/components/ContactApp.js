import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';

import ContactHeader from './ContactHeader'
import ContactHome from './ContactHome'
import AddContact from './AddContact'
import UpdateContact from './UpdateContact'
import GetContact from './GetContact'
import GetContactList from './GetContactList'

import axios from 'axios'

function ContactApp() {

    const [contactList, setContectList] = useState([]);
    const [contact, setContact] = useState({
        no: '',
        name: '',
        tel: '',
        address: ''
    });
    const history = useHistory();

    const BASE_URL = 'http://localhost:8080/contacts/';

    const getContactList = (pageno, pagesize) => {
       axios({
           method: 'GET',
           url: BASE_URL,
           params: {pageno, pagesize}
       }).then( resp => setContectList(resp.data.contacts) )
       .catch( error => console.log(error) )
    };

    const getContact = (no) => {
        axios({
            method: 'GET',
            url: BASE_URL + no,
        }).then( resp =>{
            setContact(resp.data);
            history.push('/getContact')
        })
        .catch( error => console.log(error) )
    };

    const deleteContact = (no) => {
        axios({
            method: 'DELETE',
            url: BASE_URL + no,
        }).then( resp => {
            getContactList(1, 10)
            history.push('/getContactList')
        })
        .catch( error => console.log('연락처 삭제 실패', error) )
    }

    const updateContact = (contact) => {
        axios({
            method: 'PUT',
            url: BASE_URL + contact.no,
            data: contact
        }).then( resp => {
            getContactList(1, 10)
            history.push('/getContactList')
        })
        .catch( error => console.log('연락처 수정 실패', error) )
    };

    const addContact = (contact) => {
        axios({
            method: 'POST',
            url: BASE_URL,
            data: contact
        }).then( resp => {
            getContactList(1, 10)
            history.push('/getContactList')
        })
        .catch( error => console.log('연락처 입력 실패', error) )
    };
    

    useEffect( () => {
        getContactList(1, 10)
    }, []);

    return (
        <div className="card-body">
            <ContactHeader />

            <Switch>
                <Route path="/"                 component={ContactHome}         exact/>
                <Route path="/getContactList"   render={ () => <GetContactList contactList={contactList} getContact={getContact} /> } />
                <Route path="/getContact"       render={ () => <GetContact contact={contact} deleteContact={deleteContact} />} />
                <Route path="/addContact"       render={ () => <AddContact contact={contact} setContact={setContact} addContact={addContact} /> } />
                <Route path="/updateContact"    render={ () => <UpdateContact contact={contact} setContact={setContact} updateContact={updateContact} /> } />
                <Route                          render={() => <h3>Not Found</h3>} />
            </Switch>
        </div>
    )
}

export default ContactApp
