
import './App.css'
import Navbar from './componet/navbar'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Home from './componet/home'
import Contect from './componet/contect'
import About from './componet/about'
import User from './user';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },


    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },


    {
      path: "/contect",
      element: <><Navbar /><Contect /></>,
    },

    {
      path: "/user/:username",
      element: <><Navbar /><User /></>,
    },
  ]);

  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App
