import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOutPage from "../../Pages/CheckOutPage/CheckOutPage";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
    {path:'/',
    errorElement:<ErrorPage></ErrorPage>,
     element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/courses', 
        loader:()=> fetch('http://localhost:5000/data'),
        element:<Courses></Courses>
    },
        {path:'/blog', element:<Blog></Blog>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/CorsesData/:id', 
        loader:({params})=> fetch(`http://localhost:5000/data/${params.id}`),
        element:<CoursesDetails></CoursesDetails>},
        {path:'/checkOutPage/:id', 
        loader:({params})=> fetch(`http://localhost:5000/data/${params.id}`),
        element:<PrivetRouter><CheckOutPage></CheckOutPage></PrivetRouter>}
    ]}
])

export default router;