import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Hotel from './Pages/Hotel.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Gallery from './Pages/Gallery.jsx';
import News from './Pages/News.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Contact",
    element:<Contact/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
