import { useForm} from 'react-hook-form'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'
import './SignIn.css'

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().required("Enter your username"),
        email: yup.string().required("Enter your email"),
        password: yup.string().required("Enter your password")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        Axios.post('http://localhost:8081/register', data)
        .then((response) => {
            setIsLoading(false);
            response.data.message && alert(response.data.message);
            navigate('/login');
        })
        .catch((error) => {
            setIsLoading(false);
            error.data.message && alert(error.data.message);
        });
    }

    return (
        <main>
            {isLoading ? (
                <div className="loader">
                    <div className="justify-content-center jimu-primary-loading"></div>
                </div>
            ) : (
                <div className="container">
                    <form className="card" onSubmit={handleSubmit(onSubmit)}>
                        <a className="singup">Welcome</a>
                        <p className='signup2'>Lets create your account!</p>
                        <div className="inputBox1">
                            <input type="text" {...register("username")} required />
                            <span className="user">Full Names</span>
                        </div>
                        <p className='error'>{errors.password?.message}</p>

                        <div className="inputBox">
                            <input type="text" {...register("email")} required />
                            <span>Email</span>
                        </div>
                        <p className='error'>{errors.email?.message}</p>

                        <div className="inputBox">
                            <input type="password" {...register("password")} required />
                            <span>Password</span>
                        </div>
                        <p className='error'>{errors.password?.message}</p>

                        <button className="enter" type="submit">Submit</button>
                    </form>
                </div>
            )}
        </main>
    )
}