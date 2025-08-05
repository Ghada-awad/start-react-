import react from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';



function App() {
  let roots = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
    ]}
  ])

  return (
    <>
   <RouterProvider router={roots} ></RouterProvider>
    </>
  )
}

export default App
