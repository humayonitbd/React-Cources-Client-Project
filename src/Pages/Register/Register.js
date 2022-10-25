import React from 'react'; 
import './Register.css'

const Register = () => {


    const registerHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password)
    }




    return (
        <div className='registerContainer'>
            <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 lg:mb-10">Register now!</h1>
                </div>
                <form onSubmit={registerHandler} className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">FullName</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered lg:w-80" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name='photourl' placeholder="name" className="input input-bordered lg:w-80" />
                    </div>
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
                    <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Register;