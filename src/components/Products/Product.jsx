import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Product = () => {
  const [productItems, setItems] = React.useState([]);
  console.log(productItems)

  const addToCart = (item) => {

    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      axios
        .post('https://shoplify-prod-231a968d6096.herokuapp.com/shop/carts/')
        .then((response) => {
          console.log('Cart created:', response.data);
          localStorage.setItem('cartId', response.data.id);
          window.alert("Cart created successfully");
        })
        .catch((error) => {
          console.error('Error creating cart:', error);
        });
    }
    const cartItem = {
      cart_id: cartId,
      product_id: item.id,
      quantity: 1,
    }
    console.log(item.id)
    axios.post(`https://shoplify-prod-231a968d6096.herokuapp.com/shop/carts/${cartId}/items/`,cartItem)
    .then((response) => {
    // Handle the response if needed
      console.log('Product added to cart:', response.data);
      window.alert("Product added to cart successfully");  })
      .catch((error) => {
    // Handle errors if needed
    console.error('Error adding product to cart:', error);
  });

  };
  useEffect(() => {
    axios.get('https://shoplify-prod-231a968d6096.herokuapp.com/shop/products/')
      .then(res => {
        setItems(res.data.results)
    })
  },[])

  return (
    <div className='container'>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <p className="fs-4">Shopifye</p>
          </div>
          <div className="col-md-3 text-end">
            <Link to="/cart">
              <button type="button" className="btn btn-outline-primary me-2">cart</button>
            </Link>
          </div>
        </header>
      </div>
      <p className='text-center fs-2 mt-2 mb-5 text-muted'>Welcome to our online store</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {productItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              {item.images.map((image) => (
  <img
    key={image.id} // Make sure to provide a unique key for each image
    src={image.image}
    className="bd-placeholder-img card-img-top"
    width="100%"
    height="225"
    alt={item.title}
  />
))}
              <div className="card-body">
                <p className="card-text fs-5 text-primary">{item.title}</p>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>Add to cart</button>
                  </div>
                  <p className="fs-5">Ksh {item.unit_price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Product