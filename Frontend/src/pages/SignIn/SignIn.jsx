import { useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'
import './SignIn.css'

export default function Login() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().required("Enter your username"),
        email: yup.string().required("Enter your email"),
        password: yup.string().required("Enter your password")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        Axios.post('http://localhost:8080/register', data)
        .then((response) => {
            response.data.message && alert(response.data.message);
            navigate('/login');
        })
        .catch((error) => {
            error.data.message && alert(error.data.message);
        });
    }

    return (
        <main>
            <div>
            <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
      <div className="title">Welcome</div>
      <div className="subtitle">Lets create your account!</div>

      <div className="input-container ic1">
        <input placeholder="" type="text" className="input" id="username" {...register("username")} required />
        <div className="cut"></div>
        <label className="iLabel" htmlFor="Full Name">Full Name</label>
      </div>
      <p className='error'>{errors.username?.message}</p>

      <div className="input-container ic2">
        <input placeholder="" type="text" className="input" id="email" {...register("email")} required />
        <div className="cut"></div>
        <label className="iLabel" htmlFor="email">Email</label>
      </div>
        <p className='error'>{errors.email?.message}</p>

      <div className="input-container ic2">
        <input placeholder="" type="password" className="input" id="password" {...register("password")} />
        <div className="cut cut-short"></div>
        <label className="iLabel" htmlFor="password">Password</label>
      </div>
        <p className='error'>{errors.password?.message}</p>

      <button className="submit" type="submit">submit</button>
</form>
            </div>
        </main>
    )
}