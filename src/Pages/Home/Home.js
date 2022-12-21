import React from 'react';
import './Home.css'
import homeImage from './courses-image.jpg'
import { Link } from 'react-router-dom';
import HomeSec2 from '../HomeSec2/HomeSec2';

const Home = () => {
    return (
        <div>
            <div>
            <div className='homeContainer w-10/12 mx-auto lg:flex justify-between items-center'>
            <div>
                <img src={homeImage} className='imageHome' alt="homeimg" />
            </div>
        
                <div className='lg:text-end md:text-end text-center'>
                <h2 className='text-5xl font-bold mb-7'>Programming Learging</h2>
                <p className='lg:ml-32 mb-5 text-lg'>As many courses as we have on this site, each course is a very important course. You will improve yourself by taking our course.Programmers can remember. Because this post of ours can determine your future life so without delay visit our website and check everything.</p>
                <Link to='/courses'><button className="btn btn-warning">Start learning</button></Link>
                </div>
           
            </div>
            </div>
            <div>
                <HomeSec2/>
            </div>
        </div>
    );
};

export default Home;