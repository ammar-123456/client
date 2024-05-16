// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom'; // Importera createBrowserRouter
// import './index.css';
// import Layout from './components/Layout';
// import ErrorPage from './pages/ErrorPage';
// import Home from "./pages/Home"
// import PostDetail from "./pages/PostDetail"
// import Register from "./pages/Register"
// import Login from "./pages/Login"
// import UserProfile from "./pages/UserProfile"
// import Authors from "./pages/Authors"
// import CreatePost from "./pages/CreatePost"
// import EditPost from "./pages/EditPost"
// import CategoryPost from "./pages/CategoryPost"
// import AuthorPosts from "./pages/AuthorPost"
// import Dashboard from "./pages/Dashboard"
// import Logout from "./pages/Logout"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     errorElement: <ErrorPage/>,
//     children:[
//       {index: true, element: <Home/> },
//       {path: "posts/id", element:<PostDetail/> },
//       {path: "register", element:<Register/> },
//       {path: "login", element:<Login/> },
//       {path: "profile/:id", element:<UserProfile/> },
//       {path: "authors", element:<Authors/> },
//       {path: "create", element:<CreatePost/> },
//       {path: "posts/categoryes/:category", element:<CategoryPost/> },
//       {path: "posts/users/:id", element:<AuthorPosts/> },
//       {path: "myposts/:id", element:<Dashboard/> },
//       {path: "posts/:id/edit", element:<EditPost/> },
//       {path: "logout", element:<Logout/> },

//     ]
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <Router>
//         <Layout />
//       </Router>
//     </RouterProvider>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'; // Importera createBrowserRouter
import { createRoot } from 'react-dom/client'; // Uppdatera importen för createRoot
import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Register from "./pages/Register"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import Authors from "./pages/Authors"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import DeletePost from "./pages/DeletePost"
import CategoryPost from "./pages/CategoryPost"
import AuthorPosts from "./pages/AuthorPost"
import Dashboard from "./pages/Dashboard"
import Logout from "./pages/Logout"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/> },
      {path: "posts/:id", element:<PostDetail/> },
      {path: "register", element:<Register/> },
      {path: "login", element:<Login/> },
      {path: "profile", element:<UserProfile/> },
      {path: "authors", element:<Authors/> },
      {path: "create", element:<CreatePost/> },
      {path: "posts/categoryes/:category", element:<CategoryPost/> },
      {path: "posts/users/:id", element:<AuthorPosts/> },
      {path: "myposts/:id", element:<Dashboard/> },
      {path: "posts/:id/edit", element:<EditPost/> },
      {path: "posts/:id/delete", element:<DeletePost/> },
      {path: "logout", element:<Logout/> },

    ]
  }
]);

const root = createRoot(document.getElementById('root')); // Uppdatera skapandet av rot-noden
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router>
        <Layout />
      </Router>
    </RouterProvider>
  </React.StrictMode>
);
