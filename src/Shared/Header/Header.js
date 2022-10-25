
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='bg-white'>
                <div className="navbar lg:w-10/12 mx-auto">
                <div className="flex-1">
                    <a href='/home' className="text-xl text-black font-bold">Programming Learning{user.displayName}</a>
                </div>
                <div className="flex-none gap-2">
                    <ul className='lg:flex hidden lg:block'>
                        <li className='mr-5 text-black font-bold'><Link to='/home'>Home</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/courses'>Courses</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/faq'>FAQ</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/blog'>Blog</Link></li>
                        <input type="checkbox" className="toggle" defaultChecked/>
                        <li className='mr-5 text-black font-bold'><Link to='/login'>login</Link></li>
                        <li className='mr-5 text-black font-bold'><Link to='/register'>Register</Link></li>
                    </ul>
                    <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt=''/>
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