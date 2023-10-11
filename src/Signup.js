import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        console.log('Handling form submission');
        setErrors(Validation(values));
        if(errors.firstname === "" && errors.lastname === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className='bg-white p-3 rounded w-25'>
            <h2 className='text-center'>Sign Up</h2>
            <p>Create a free account quickly and easily.</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input name="firstname" onChange={handleInput} type="firstname" placeholder="First Name" className='form-control rounded-0'/>
                        <span>{errors.firstname && <span className='text-danger'>{errors.firstname}</span>}</span>
                    </div>
                    <div className="mb-3">
                        <input name="lastname" onChange={handleInput} type="lastname" placeholder="Last Name" className='form-control rounded-0'/>
                        <span>{errors.lastname && <span className='text-danger'>{errors.lastname}</span>}</span>
                    </div>
                    <div className="mb-3">
                        <input name="email" onChange={handleInput} type="email" placeholder="Email" className='form-control rounded-0'/>
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>
                    <div className="mb-3">
                        <input name="password" onChange={handleInput} type="password" placeholder="Password" className='form-control rounded-0'/>
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <button className="btn btn-dark w-100">Sign Up</button>
                    <p className='mt-2 mb-0 ml-0 mr-0'>Already have an account?
                        <Link to="/login" className="text-decoration-none" style={{marginLeft: '6px'}}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Signup