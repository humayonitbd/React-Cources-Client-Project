import React from 'react';
import HomeSec2Details from './HomeSec2Details';

const HomeSec2 = () => {
    const section2 =[
        {
            id:1,
            name:"Basic learning",
            img:"https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
            details:"Basic learning needs refer to the knowledge, skills, attitudes and values necessary for people to survive, to improve the quality of their lives, and to continue learning",
            link:"/CorsesData/3"

        },
        {
            id:2,
            name:"Medium learning",
            img:"https://cdn-icons-png.flaticon.com/512/1005/1005142.png",
            details:"The Learning Medium refers to which sensory channel is used for learning. The sensory channels include vision, tactile, and auditory and there is usually a primary and secondary medium.",
            link:"/CorsesData/4"
        },
        {
            id:3,
            name:"Advanse learning",
            img:"https://cdn-icons-png.flaticon.com/512/2620/2620993.png",
            details:"Advanced learning' describes the learning of students who learn at a rate that exceeds that of their peers in one or more content areas. The learning of these children also falls outside the need-spectrum of the majority of their peers",
            link:"/CorsesData/1"
        }
    ]
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:w-10/12 mx-auto my-20'>
            {
                section2?.map(secdata => <HomeSec2Details key={secdata.id} secdata={secdata}></HomeSec2Details>)
            }
        </div>
    );
};

export default HomeSec2;