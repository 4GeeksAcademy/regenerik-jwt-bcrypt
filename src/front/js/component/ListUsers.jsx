import React, { useContext } from 'react';
import { Context } from '../store/appContext.js';

const ListUsers = () => {

    const {store,actions} = useContext(Context)

    return(
        <div>
            <h1>Lista de usuarios</h1>
            <button onClick={async()=>await actions.getList()}>Obtener Lista</button>
            <br/>
            <ul>
                {
                    store.userList.map((user,index)=>{
                        return(
                            <li key={index}>{user.name}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ListUsers;