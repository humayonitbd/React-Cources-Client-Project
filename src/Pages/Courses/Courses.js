import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryPage from '../../Shared/CategoryPage/CategoryPage';
import CorsesData from '../CorsesData/CorsesData';
import './Courses.css'

const Courses = () => {
    const categorys = useLoaderData();
    // console.log(categorys)
    return (
        <div className='lg:flex lg:w-10/12 mx-auto mb-5 mt-10'>
           
            <div className='CoursesLeftSide'>
                {
                categorys.map(categorydata => <CategoryPage key={categorydata.id} categorydata={categorydata}></CategoryPage>)
                }
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