import {Link} from 'react-router-dom'
import BackGroundImage from '../assets/banneryeni.jpg'
import '../styles/home.css'


function Home() {
  return (
<div className='mainPage' style={{backgroundImage:`url(${BackGroundImage})`}}>
    <div className='order'>
        <Link to='/menu'>
            <button>Sipariş Ver</button>
        </Link>
    </div>
</div>
  )
}

export default Home