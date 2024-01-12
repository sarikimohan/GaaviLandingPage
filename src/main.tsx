import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Blank from './scenes/blankScreen/blank.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  { 
    path:"blank",
    element:<Blank/>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
