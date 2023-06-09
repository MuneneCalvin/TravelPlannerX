import './SignIn.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginForm() {

    const schema = yup.object().shape({
        name: yup.string().required('User Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        // age: yup.number("Age must be a number").positive("Age must be a positive number").required("Age is required"),
        password: yup.string().required('Password is required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        'password must contain at least 4 characters,uppercase,lowercase,number and one special case character'
        ),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
    <section className='signin'>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h1>Welcome back</h1>

        <div className="form-group">
        <label>User Name</label>
        <input type="name" placeholder='Enter your name' {...register('name', { required: true })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder='someone@name.com' {...register('email', { required: true })} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Sign In</button>
    </form>
    </section>
    );
}

export default LoginForm;