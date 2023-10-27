import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import Information from './Components/Information/Information';
import Login from './Components/Login/Login';
import FormP from './Pages/FormP/FormP';
import SubmissionP from './Pages/SubmissionP/Submission';


const router=createBrowserRouter([{
  path:'/',
  element:<FormP/>
},
{
  path:'/upsc',
  element:<SubmissionP/>
}])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
