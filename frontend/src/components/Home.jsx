import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='d-flex justify-content-center'>
    <h1 className='fw-bold mt-3'>Random Episode Generator</h1></div>
    <div className='container'>
      
    <div className='row'>
        
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/friends'>
                <img className='card-img-top' height={320} src="https://www.postergully.com/cdn/shop/products/pg1004_7619aa93-d16e-4b99-926f-e61ec09157e7_1024x1024.jpg?v=1578651201"/></Link>
                <h5 className='card-title'>Friends</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/friends' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/himym'>
                <img className='card-img-top' height={320} src="https://m.media-amazon.com/images/I/61Gp6Ee2EZL._AC_UF894,1000_QL80_.jpg"/></Link>
                <h5 className='card-title'>How I Met Your Mother</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/himym' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/tbbt'>
                <img className='card-img-top' height={320} src="https://fr.web.img3.acsta.net/c_310_420/pictures/18/11/06/15/36/0408812.jpg"/></Link>
                <h5 className='card-title'>The Big Bang Theory</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/tbbt' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/modern-family'>
                <img className='card-img-top' height={320} src="https://static.tvtropes.org/pmwiki/pub/images/mf1.png"/></Link>
                <h5 className='card-title'>Modern Family</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/modern-family' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/the-office'>
                <img className='card-img-top'  height={320} src="https://m.media-amazon.com/images/I/615MPacH9qL.jpg"/></Link>
                <h5 className='card-title'>The Office</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/the-office' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/game-of-thrones'>
                <img className='card-img-top'  height={320} src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"/></Link>
                <h5 className='card-title'>Game Of Thrones</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/game-of-thrones' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/b99'>
                <img className='card-img-top'  height={320} src="https://resizing.flixster.com/JysRb3DWAU1VI5ywAvY4JwgiWZ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjg3MDUxNi53ZWJw"/></Link>
                <h5 className='card-title'>Brooklyn Nine-Nine</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/b99' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-3  mt-3'>
            <div className='card'>
            <div className='card-body'>
            <Link to='/simpsons'>
                <img className='card-img-top'  height={320} src="https://i.pinimg.com/originals/c7/b4/b0/c7b4b0c0265a5bc34089e305f507492f.jpg"/></Link>
                <h5 className='card-title'>The Simpsons</h5>
                <div className='d-flex justify-content-center mt-2'>
                <Link to='/simpsons' className='btn btn-primary '>Generate</Link>
                </div>
               
            </div>
            </div>
        </div>
      
        
       
       
        </div>
    </div>
    </div>
  )
}

export default Home