import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {signInHandler, googleLogIn, handlerGithubLogin} = useContext(AuthContext)
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

        const githabLogin=()=>{
            handlerGithubLogin()
            .then(result =>{
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
                <div className='shadow-2xl bg-base-100 pb-6'>
                <form onSubmit={loginHandler} className="card flex-shrink-0 max-w-sm">
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
                   
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary mb-2">login</button>
                    {/* <div className='flex justify-evenly'>
                    <button onClick={handlerGoogleLogin} className="btn btn-outline"><FaGoogle className='text-lg'></FaGoogle> - log-in</button>
                    <button onClick={githabLogin} className="btn btn-outline"> <FaGithub className='text-lg'></FaGithub> - log-in</button>
                    </div> */}
                    </div>
                    <p className='text-center'>Have you any account? <Link className='underline  underline-offset-1 text-red-500' to='/register'>register</Link></p>
                </div>
                </form>
                <div className='flex justify-evenly'>
                    <button onClick={handlerGoogleLogin} className="btn btn-outline"><FaGoogle className='text-lg'></FaGoogle> - log-in</button>
                    <button onClick={githabLogin} className="btn btn-outline"> <FaGithub className='text-lg'></FaGithub> - log-in</button>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;