import React from 'react';
import './Home.css'
import homeImage from './courses-image.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homeContainer w-10/12 mx-auto lg:flex justify-between items-center'>
            <div>
                <img src={homeImage} className='imageHome' alt="homeimg" />
            </div>
        
                <div className='text-end'>
                <h2 className='text-5xl font-bold mb-7'>Programming Learging</h2>
                <p className='lg:ml-32 mb-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus laborum officia omnis velit beatae, eaque, consectetur debitis deleniti odio autem ad, molestias quae alias quaerat excepturi. Sapiente, quisquam qui?</p>
                <Link to='/courses'><button className="btn btn-warning">Start learning</button></Link>
                </div>
           
        </div>
    );
};

export default Home;