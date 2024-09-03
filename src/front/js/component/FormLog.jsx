import React, { useState, useContext} from 'react';
import { Context } from '../store/appContext';

const FormLog = () => {
    const {actions} = useContext(Context)
    const [formLog , setFormLog] = useState({
        email:"",
        password:""
    })

    const handleData = (e) => {
        let valor = e.target.value
        let type = e.target.name 
        setFormLog({...formLog, [type]:valor})
    }

    const sendDataLog = async(e) => {
        e.preventDefault()
        try{
            console.log("la data enviada: ",formLog)
            await actions.login(formLog)
            setFormLog({
                email:"",
                password:""
            })
        }catch(e){
            console.error(e)
        }
    }

    return(
        <div>
            <h1>Log-in</h1>
            <br/>
            <form onSubmit={sendDataLog}>
                <label htmlFor="email">E-mail</label>
                <input value={formLog.email} type="text" id="email" name='email' onChange={handleData}/>
                <br/>
                <label htmlFor="password">Password</label>
                <input value={formLog.password} type="password" id="password" name='password' onChange={handleData}/>
                <br/>
                <button type='submit'>Log-in</button>
            </form>
        </div>
    )
}

export default FormLog;