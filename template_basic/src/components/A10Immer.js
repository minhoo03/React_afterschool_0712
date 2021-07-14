import React, { useCallback, useState } from 'react'

import immer from 'immer'

function A10Immer() {
    const [person, setPerson] = useState({
        name: '',
        info: {
            address: '',
            tel: [10, 20, 30],
            etc: {
                one: '',
                two: ''
            }
        }
    });

    const changeName = useCallback(
        (e) => setPerson({...person, name: 'smah'}, [person])
    )

    const changeAdress = useCallback( 
        (e) => {
            setPerson({
                ...person,
                info: {
                    ...person.info,
                    address: 'Seoul'
                }
            })
        }
    )

    const changeOne = useCallback(
        (e) => {
            setPerson({
                ...person,
                info: {
                    ...person.info,
                    etc: {
                        ...person.etc,
                        one: '복잡하네'
                    }
                }
            })
        }, [person]
    )

    const addArray = useCallback(
        (num) => {
            setPerson({
                ...person,
                info: {
                    ...person.info,
                    tel: person.info.tel.concat(num)
                }
            })
        }, [person]
    )

    const changeNameImmer = useCallback(
        (e) => {
            setPerson( immer(person, draft => {
                // 받은 매개변수 draft를 이용하여 객체 참조 방식으로 변경한다.
                // draft = person
                draft.name = 'minu'
            }))
        }, [person]
    )

    const changeAddressImmer = useCallback(
        (e) => {
            setPerson( immer(person, draft => {
                // 받은 매개변수 draft를 이용하여 객체 참조 방식으로 변경한다.
                // draft = person
                draft.info.address = 'Busan'
            }))
        }, [person]
    )

    const changeOneImmer = useCallback(
        (e) => {
            setPerson( immer(person, draft => {
                // 받은 매개변수 draft를 이용하여 객체 참조 방식으로 변경한다.
                // draft = person
                draft.info.etc.one = '졸리다'
            }))
        }, [person]
    )

    const addArrayImmer = useCallback(
        (num) => {
            setPerson( immer(person, draft => {
                // 배열의 추가, 삭제, 변경은 기존의 자바스크립트의 push, array[0] = ?, splice(?, ?)
                draft.info.tel.push(num)
            }))
        }, [person]
    )

    const updateArrayImmer = useCallback(
        (index, value) => {
            setPerson( immer(person, draft => {
                // 배열의 추가, 삭제, 변경은 기존의 자바스크립트의 push, array[0] = ?, splice(?, ?)
                draft.info.tel[index] = value
            }))
        }, [person]
    )

    const deleteArrayImmer = useCallback(
        (index) => {
            setPerson( immer(person, draft => {
                // 배열의 추가, 삭제, 변경은 기존의 자바스크립트의 push, array[0] = ?, splice(?, ?)
                draft.info.tel.splice(index, 1)
            }))
        }, [person]
    )


    return (
        <div>
            <h3>Immer</h3>
            
            Name: {person.name}<br />
            Address: {person.info.address}<br />
            One: {person.info.etc.one}<br />
            Ary: {person.info.tel.map( (item, i) => <span key={i}>{item} </span>)}

            <br />
            <button onClick={changeName}>Name</button>
            <button onClick={changeAdress}>Address</button>
            <button onClick={changeOne}>One</button>
            <button onClick={addArray}>ADD</button>
            <br />

            <button onClick={changeNameImmer}>Name</button>
            <button onClick={changeAddressImmer}>Address</button>
            <button onClick={changeOneImmer}>One</button>

            <button onClick={ () => addArrayImmer(300)}>ADD</button>
            <button onClick={ () => updateArrayImmer(0, 1000)}>UPDATE</button>
            <button onClick={ () => deleteArrayImmer(1)}>DELETE</button>
        </div>
    )
}

export default A10Immer
