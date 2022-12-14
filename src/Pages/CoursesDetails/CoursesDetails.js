import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './CoursesDetails.css'

const CoursesDetails = () => {
    const coursesDetails = useLoaderData();
    //object distructure
    const {title, id, category, name, Details, ourcourses, images, parsent, learn, author, others} = coursesDetails;
    console.log(coursesDetails)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=> componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=> alert('prient success')
    })



    return (
        <>
        <div ref={componentRef} className='CoursesDetails mb-5' style={{width: '100%', height:'auto'}}>
            <div className="card mt-10 card-compact lg:w-8/12 mx-auto bg-base-100 shadow-xl">
                <div className='flex justify-evenly items-center bg-warning py-4'>
                <h2 className=' text-3xl font-bold text-center'>{name} Courses </h2>
                <button onClick={handlePrint} className='btn btn-black text-white'>Download-Pdf</button>
                </div>
            <figure><img src={images} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                <h2 className="card-title text-2xl">Details about this your course {category}</h2>
                <p className='text-end text-warning font-bold text-2xl underline underline-offset-1'>{parsent}</p>
                </div>
                <div className='authorContainer flex justify-start items-center mt-5 bg-red-100 rounded-lg'>
                    <img className='mr-3' src={author.img} alt="" />
                    <div className=''>
                    <p className='text-xl font-semibold'>{author.name}</p>
                    <p className='text-lg'>{author.detalis}</p>
                    <p>{author.thanks}</p>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl mb-3 mt-3 font-semibold bg-warning py-2 inline-block px-2 rounded'>Learn about: {category}</h2>
                    <p className='text-lg'>{Details}</p>
                </div>



                <div className='mt-5'>
                    <h2 className='text-2xl mb-3 mt-3 font-semibold bg-warning py-2 inline-block px-2 rounded'>What you will learn by doing the course:</h2>
                    {
                        learn.map(ln => <li className='mb-2 text-lg'>{ln}</li>)
                    }
                </div>
                <div className='mt-5'>
                    <h2 className='text-2xl mb-3 mt-3 font-semibold bg-warning py-2 inline-block px-2 rounded'>This course is for those who:</h2>
                    {
                        others.map(other => <li className='mb-2 text-lg'>{other}</li>)
                    }
                </div>
                <div>
                    <h2 className='text-2xl mb-3 mt-3 font-semibold bg-warning py-2 inline-block px-2 rounded'>Learn about courses:</h2>
                    <p className='text-lg'>{ourcourses}</p>
                </div>
                <div className="card-actions justify-center py-10">
                <Link to={`/checkOutPage/${id}`}><button className="btn btn-warning font-bold text-lg">Get premium access</button></Link>
                </div>
               
            </div>
            </div>
        </div>
        </>
    );
};

export default CoursesDetails;