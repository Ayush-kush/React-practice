import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About, Contact } from './components/index.js'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path: "contact",
        element : <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
