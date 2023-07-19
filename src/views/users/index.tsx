
import React, { useEffect, useState } from 'react'

import {getUsers} from '../../service/user_server';
import {User} from '../../models/users';

const Users = () =>{
    const [data, setData] = useState<User[]>([])

    useEffect(()=> {
        getUsers().then((res) => setData(res.users));
    }, [])
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                 {data.map((d, i) => {
                    return <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                    </tr>
                 })}
            </tbody>
        </table>
    </div>
  )
}

export default Users;