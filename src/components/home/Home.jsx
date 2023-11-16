import shopping from '../../assets/shopping.png'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='home'>
      <div className="d-flex justify-content-around align-items-center">
        <img src={shopping} alt="shopping" className="img-fluid" />
        <h1 className='fs-1 fw-bold'>Welcome to Shopifye</h1>
        <Link to="/shop">
          <button className="btn btn-lg btn-primary">Shop Now</button>
        </Link>

      </div>
    </div>
  )
}

export default Home