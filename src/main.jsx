import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Charts from './Charts.jsx';
import Contact from './Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
  },
  {
    path: "/charts",
    element:<Charts/> ,
  },
  {
    path: "/contact",
    element:<Contact/> ,
  },
  {
    path: "/products",
    element:<h1>produtos</h1> ,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
