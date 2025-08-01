
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import { githubInfoLoader } from './components/Github/Github.jsx';


// const router = createBrowserRouter([{
//   path: '/',//top level route
//   element:<Layout />, //layout component that wraps around all the routes this will be rendered for every route
//   children:[{
//     path:"",
//     element:<Home/> //this is the home component that will be rendered when the path is empty
//   },{
//     path:"about",
//     element:<About/> //this is the about component that will be rendered when the path is "about"
//   },
//   {
//     path:"contact",
//     element:<Contact/> //this is the contact component that will be rendered when the path is "contact"
//   }]
//   }]);
//Another way to define routes using createBrowserRouter
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route 
     loader={githubInfoLoader} //this loader function will be called before the component is rendered
     //it will fetch the data from the api and pass it to the component as props
     //useLoaderData hook will be used to access the data in the component
     //this is useful for data fetching before the component is rendered
     //this is useful for server side rendering
     //this is useful for SEO as the data will be available before the component is rendered
     //this is useful for performance as the data will be available before the component is rendered
     //this is useful for caching as the data will be cached in the browser
     //this is useful for offline support as the data will be cached in the browser 
     path='github'
     element={<Github/>}/>

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


