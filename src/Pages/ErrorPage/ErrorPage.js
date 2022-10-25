import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


const ErrorPage = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=> componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=> alert('prient success')
    })
    return (
        <>
        <div  ref={componentRef} className='text-center' style={{width: '100%', height:window.innerHeight}}>
            <h2 className='text-5xl mt-60'>Page is not found!!</h2>
            <p className='text-3xl'>404</p>
            <Link to='/' className='text-red-700 underline underline-offset-1'><p>Back</p></Link>
       
       <button onClick={handlePrint}>print-btn</button>

        </div>
        </>
    );
};

export default ErrorPage;