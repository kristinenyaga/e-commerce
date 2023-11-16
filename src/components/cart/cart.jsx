import { useEffect,useState } from 'react'
import ReusableCartComponent from 'reusable-cart-component'
import 'reusable-cart-component/dist/index.css'
import axios from 'axios'

const Cart = () => {
  const [items, setCartItems] = useState([]);
  const cartId = localStorage.getItem('cartId');
    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/shop/carts/${cartId}/`)
      .then(res => {
        let cartItems=res.data.items
        if (cartItems.length == 0) {
          localStorage.removeItem('cartId')
        }
        setCartItems(res.data.items)
    })
  },[])
  return (
    <div>
      <ReusableCartComponent items={items} cartId={cartId}  />  
    </div>
  )
}

export default Cart