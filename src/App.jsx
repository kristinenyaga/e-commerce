import './App.css'
import Product from './components/Products/Product'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/cart';
import Home from './components/home/Home'
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
