import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signInHandler, googleLogIn} = useContext(AuthContext)
    const naviget = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const loginHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logInHandler(email, password)
        form.reset();
    }

    const logInHandler =(email, password)=>{
        signInHandler(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Login successfull !!!')
            naviget(from, {replace: true})
           
        })
        .catch(error =>{
            console.error(error)
            if(error.message){
                toast.error(' Your type do not match!!')
            }
            
        })
    }

        const handlerGoogleLogin=()=>{
            googleLogIn()
            .then(result =>{
                const user = result.user;
                console.log(user)
                naviget(from, {replace: true})
                toast.success('Login successfull!!')
            })
            .catch(error =>console.error(error))
        }



    return (
        <div className='logContainer'>
            <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 lg:mb-10">Login now!</h1>
                </div>
                <form onSubmit={loginHandler} className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered lg:w-80" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered lg:w-80" />
                    {/* <label className="label">
                        <a href="#s" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary mb-2">login</button>
                    <button onClick={handlerGoogleLogin} className="btn btn-primary">Google log-in</button>
                    </div>
                    <p>Have you any account? <Link className='underline underline-offset-1 text-red-500' to='/register'>register</Link></p>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;