
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars, FaFacebook } from 'react-icons/fa';


const Header = () => {
    const {user, logOutHandler} = useContext(AuthContext)

    const handlerLogoutBtn =()=>{
        logOutHandler()
        .then(result =>{
            toast.success('logout successfull!!')
        })
        .catch(error=>console.error(error))

    }

    

    return (
        <div className='bg-white'>
                <div className="navbar lg:w-10/12 mx-auto">
                <div className="flex-1">
                    <a href='/home' className="text-xl text-black font-bold">Programming Learning</a>
                </div>
                <div className="flex-none gap-2">
                    <ul className='lg:flex hidden lg:block'>
                        <li className='mr-5 text-black font-bold'><Link to='/home'>Home</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/courses'>Courses</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/faq'>FAQ</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/blog'>Blog</Link></li>
                        <input type="checkbox" className="toggle" defaultChecked/>
                        { user && user.uid ?  <li onClick={handlerLogoutBtn} className='mr-5 text-black font-bold'><Link >log-out</Link></li> :
                        <>
                        <li className='mr-5 text-black font-bold'><Link to='/login'>login</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/register'>Register</Link></li>
                        </>
                        }
                       {user&& user.uid ? <img title={user.displayName} className='h-8 w-8 bg-slate-600 rounded-full' src={user.photoURL} alt=''/> : 'photo'}
                    </ul>
                    <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="text-lg">
                        <FaBars></FaBars>
                        
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content  bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/register'>Register</Link></li>

                    </ul>
                    
                    </div>
                </div>
                </div>
        </div>
      
    );
};

export default Header;