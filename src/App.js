import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';

import FormP from './Pages/FormP/FormP';
import SubmissionP from './Pages/SubmissionP/Submission';


const router=createBrowserRouter([{
  path:"/",
  element:<FormP/>
},
{
  path:"upsc",
  element:<SubmissionP/>
}])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;