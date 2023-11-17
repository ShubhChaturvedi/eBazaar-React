import React from 'react'

export default function ProductsDisplay(props) {
  return (
    <>
    <div className="heading d-flex my-5  justify-content-center">
      <h2 className=''>{props.title}</h2>
    </div>
    <div className="container my-5 mx-auto d-flex justify-content-around">
    <div className="card" style={
        {
            width: "18rem"
        }
    }>
  <img src="image4.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Loreal paris - 500ml</h5>
    <p className="card-text">Some quick example text to build on the Loreal paris - 500ml and make up the bulk of the card's content.</p>
    <h6 className="card-text my-3">Price: &#8377; 500</h6>
    <a href="#" className="btn btn-dark">Buy Now</a>
  </div>
</div>
<div className="card" style={
    {
        width: "18rem"
    }
}>
  <img src="image4.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Loreal paris - 500ml</h5>
    <p className="card-text">Some quick example text to build on the Loreal paris - 500ml and make up the bulk of the card's content.</p>
    <h6 className="card-text my-3">Price: &#8377; 500</h6>
    <a href="#" className="btn btn-dark">Buy Now</a>
  </div>
</div>
<div className="card" style={
    {
        width: "18rem"
    }
}>
  <img src="image4.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Loreal paris - 500ml</h5>
    <p className="card-text">Some quick example text to build on the Loreal paris - 500ml and make up the bulk of the card's content.</p>
    <h6 className="card-text my-3">Price: &#8377; 500</h6>
    <a href="#" className="btn btn-dark">Buy Now</a>
  </div>
</div>
    </div>
    </>
  )
}
