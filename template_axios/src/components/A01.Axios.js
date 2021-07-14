
import React, { useState } from 'react'
import axios from 'axios'

function A01AxiosGet() {
    
    const [data, setData] = useState();

    const getContactList = (pageno, pagesize) => {
        /*
        axios.get('http://localhost:8080/contacts', {params: {pageno, pagesize}})
        .then(
            (resp) => {
                // console.log(resp.data);
                setData(resp.data);
            }
        ).catch(
            (error) => console.log(error)
        )
        */
       axios({
           method: 'GET',
           url: 'http://localhost:8080/contacts',
           params: {pageno, pagesize}
       }).then( resp => setData(resp.data) )
       .catch( error => setData(error) )
    }

    const getContactListSync = async (pageno, pagesize) => {
       await axios({
           method: 'GET',
           url: 'http://localhost:8080/contacts',
           params: {pageno: 1, pagesize: 5}
       }).then( resp => console.log(resp.data) )
       .catch( error => setData(error) );

       console.log('middle')

        await axios({
            method: 'GET',
            url: 'http://localhost:8080/contacts',
            params: {pageno: 2, pagesize: 10}
        }).then( resp => console.log(resp.data) )
        .catch( error => setData(error) )
    }

    const getContact = (no) => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/contacts/' + no,
        }).then( resp => setData(resp.data) )
        .catch( error => setData(error) );
     }

     const addContact = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8080/contacts/',
            data: {
                "name":"강감찬",
                "tel":"010-2222-3339",
                "address":"서울시"
            }
        }).then( resp => setData(resp.data) )
        .catch( error => setData(error) );
     }
    
     const updateContact = (id) => {
        axios({
            method: 'PUT',
            url: 'http://localhost:8080/contacts/' + id,
            data: {
                "name":"을지문덕",
                "tel":"010-1111-3339",
                "address":"부산시"
            }
        }).then( resp => setData(resp.data) )
        .catch( error => setData(error) );
     }

     const deleteContact = (id) => {
        axios({
            method: 'DELETE',
            url: 'http://localhost:8080/contacts/' + id,
        }).then( resp => setData(resp.data) )
        .catch( error => setData(error) );
     }

    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button onClick={ () => getContactList(1, 10)}>DATA LIST</button>
            <button onClick={getContactListSync}>DATA LIST ASYNC</button>
            <button onClick={ () => getContact(1) }>GET</button>
            <button onClick={addContact}>ADD</button>
            <button onClick={() => updateContact(1626239256754)}>UPDATE</button>
            <button onClick={() => deleteContact(1626239282914)}>DELETE</button><br />
            <br />
            
            {data && <textarea rows="30" cols="100" value={JSON.stringify(data, null, 4)} readOnly={true} /> }
        </div>
    )
}

export default A01AxiosGet
