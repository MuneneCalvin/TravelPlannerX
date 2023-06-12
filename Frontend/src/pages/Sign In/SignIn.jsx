import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [values, setValues] = useState ({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate ();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/signup', values)
        .then(res => {
            console.log(res);
            navigate('/login')
        })
        .catch (err => console.log (err));
    }
    
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" name="name" onChange={handleInput}  placeholder="Enter your Name" className="form-control rounded-0" />
                        
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" name="email" onChange={handleInput}  placeholder="Enter your email" className="form-control rounded-0" />
                        
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" name="password" onChange={handleInput} placeholder="Enter your password" className="form-control rounded-0"/>
                        
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                    <p>Do not have an account?</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0'>Log in</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;