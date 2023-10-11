import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='text-center'>Greek Physique</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input name="email" type="email" placeholder="Email" onChange={handleInput} className='form-control rounded-0'/>
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>
                    <div className="mb-3">
                        <input name="password" type="password" placeholder="Password" onChange={handleInput} className='form-control rounded-0'/>
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <button type='submit' className="btn btn-dark w-100">Login</button>
                    <p className='mt-2 mb-0 ml-0 mr-0'>Haven't registered yet?
                        <Link to="/signup" className="text-decoration-none" style={{marginLeft: '6px'}}>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login