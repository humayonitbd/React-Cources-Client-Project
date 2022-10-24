import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {path:'/',
    errorElement:<ErrorPage></ErrorPage>,
     element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/courses', element:<Courses></Courses>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>}
    ]}
])

export default router;