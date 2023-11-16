import './App.css'
import Product from './components/Products/Product'
import Cart from './components/cart/cart';
import Home from './components/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Product />,
  },
    {
    path: '/cart',
    element: <Cart />,
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
