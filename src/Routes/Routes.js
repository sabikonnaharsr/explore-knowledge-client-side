import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import SingleCourse from "../Pages/Courses/SingleCourse/SingleCourse";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
<<<<<<< HEAD
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/courses",
        loader: () =>
          fetch(
            "https://router-firebase-assignments-10-server.vercel.app/books"
          ),
        element: <Courses />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: ".singleCourse",
        element: <SingleCourse></SingleCourse>,
      },
    ],
  },
=======
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
           {
            path: '/banner',
            element: <Banner></Banner>
           },
           {
            path: '/blogs',
            element: <Blogs/>
           },
           {
            path: '/courses',
            element: <Courses/>
           },
           {
            path: '/courseDetails',
            element: <CourseDetails></CourseDetails>
           },
           {
            path: '.singleCourse',
            element: <SingleCourse></SingleCourse>
           }
        ]
        
    }
>>>>>>> 1b7d394ee1ac25fac349a485be9d8df9b5329579
]);
