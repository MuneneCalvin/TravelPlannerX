import { useState } from 'react';
import './SignIn.css'

function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //        console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            console.log('password matched');
        } else {
            console.log('password not matched');
        }
    }
    
    const handlenameChange = (e) => {
        setName(e.target.value);
    }
    const handleemailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlepasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleconfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    return (
        <main>
            <div className="container">
                <form onSubmit={handleSubmit} className='registration-form'>
                    <h3>Sign Up</h3>
                    <label htmlFor="name">User Name :</label>
                    <input type="text" placeholder="Username" id='name' value={name} onChange={handlenameChange} required/>
                    <label htmlFor="email">Email Address :</label>
                    <input type="email" placeholder="Email Address" id='email' value={email} onChange={handleemailChange} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id='password' value={password} onChange={handlepasswordChange} required/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" id='confirmPassword' value={confirmPassword} onChange={handleconfirmPasswordChange} required/>
                    <button type='submit'>Register</button>
                </form>

                <form onSubmit={handleSubmit} className='registration-form'>
                    <h3>Sign In</h3>
                    <label htmlFor="name">User Name :</label>
                    <input type="text" placeholder="Username" id='name' value={name} onChange={handlenameChange} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id='password' value={password} onChange={handlepasswordChange} required/>
                    <button type='submit'>Sign In</button>
                    <a href="#">Forget Password?</a>
                </form>
            </div>
        </main>
    )
}

export default SignIn;
