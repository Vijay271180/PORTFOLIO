import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router=createBrowserRouter([
    {path:"/",
      element:<><Navbar/><Home></Home></>
    },
    {
     path:"/skill",
      element:<><Navbar/><Skill></Skill></>
    },
    {
     path:"/project",
      element:<><Navbar/>
              <Project></Project></>
    },
       {
     path:"/contact",
      element:<><Navbar/>
                 <Contact></Contact></>
    },
  ])
  return (
    <>
   
           
        <RouterProvider router={router}/>    
                
    </>
  );
}

export default App;
