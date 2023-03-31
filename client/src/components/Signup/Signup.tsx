import React from 'react'
import classes from './Signup.module.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

function Signup() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue=e.currentTarget;
        setData({...data, [newValue.name]:newValue.value})
    }

    

const handleSubmit = async (e: React.FormEvent)=> {
    e.preventDefault()
    try {
        const url="http://localhost:8080/api/users"
        const {data: res} = await axios.post(url, data);
        console.log(data)
        const basicInfo=`${data.firstName} ${data.lastName}`
        localStorage.setItem("token", basicInfo)
        window.location.href="/"
        
    } catch (error:any) {
        if(error.response  && 
            error.response.status >= 400 &&
            error.response.status <= 500){

                setError(error.response.data.message)
            }
        
    }
}

  return (
    <div className={classes.signup_container}>
        <div className={classes.signup_form_container}>
            <div className={classes.left}>
                <h1>Welcome Back</h1>
                
            </div>
            <div className={classes.right}>
                <form className={classes.form_container} onSubmit={handleSubmit}>
                    <h2> Create Account</h2>
                    <input
                    type = "text"
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    className={classes.input}/>
                    <input
                    type = "text"
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    required
                    className={classes.input}/>
                     <input
                    type = "email"
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    required
                    className={classes.input}/>
                     <input
                    type = "password"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    required
                    className={classes.input}/>
                    {error && <div className={classes.eroor_msg}>{error}</div>}
                    <button type="submit" className={classes.greenbtn}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup