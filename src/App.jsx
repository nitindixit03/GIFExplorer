import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Category from "./pages/Category";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import GifPage from "./pages/GifPage";
import GifProvider from "./Context/GifContext";


const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:type/:slug',
        element: <GifPage />,
      },
      {
        path: '/favourite',
        element: <Favourites />,
      }
    ]
  }
])

function App() {
  

  return (
  <GifProvider>
    <RouterProvider router={router} />;
  </GifProvider>
  )
}

export default App
