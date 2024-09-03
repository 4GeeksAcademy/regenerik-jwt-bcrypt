import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext.js';

const Form = () => {
    const {actions} = useContext(Context)
    const [ data , setData ] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleData = (e) => {
        let valor = e.target.value
        let type = e.target.name 
        setData({...data, [type]:valor})
    }

    const sendData = async(e) => {
        e.preventDefault()
        try{
            console.log("la data enviada: ",data)
            await actions.register(data)
            setData({
                name:"",
                email:"",
                password:""
            })
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div>
            <h1>Soy Form-Register</h1>
            <form onSubmit={sendData}>
                <label htmlFor="name">Nombre</label>
                <input value={data.name} type="text" id="name" name='name' onChange={handleData}/>
                <br/>
                <label htmlFor="email">E-mail</label>
                <input value={data.email} type="text" id="email" name='email' onChange={handleData}/>
                <br/>
                <label htmlFor="password">Password</label>
                <input value={data.password} type="password" id="password" name='password' onChange={handleData}/>
                <br/>
                <button type='submit'>Registrarse</button>
            </form>
        </div>
    )
}

export default Form;