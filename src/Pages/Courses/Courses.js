import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CorsesData from '../CorsesData/CorsesData';
import './Courses.css'

const Courses = () => {
    const categorys = useLoaderData();
    return (
        <div className='lg:flex lg:w-10/12 mx-auto mb-5 mt-10'>
           
            <div className=' CoursesLeftSide'>
            {/* <h3 className='text-2xl p-0 m-0 font-bold lg:text-start'>Courses list</h3> */}
                {categorys.map(category =><Link to={`/CorsesData/${category.id}`}><p className='lg:text-start mb-3 font-bold bg-blue-100 py-3 px-2' key={category.id} >{category.name}</p></Link>)}
            </div>
            
       

            <div className='lg:px-5 CoursesRightSide'>
            {
                categorys.map(category => <CorsesData key={category.id} category={category}></CorsesData>)
            }
            </div>
            
        </div>
        
    );
};

export default Courses;