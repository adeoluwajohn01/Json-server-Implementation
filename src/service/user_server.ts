import users from '../db/db.json'
import {User} from '../models/users';



export const getUsers:() => Promise<{users : User[]}> = ()  =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            // const parsedDB= JSON.parse(users);
            const parsedDB = users as {users: User[]};
            resolve(parsedDB);
        }, 2000)
    })
}

