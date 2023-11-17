import React from 'react'

export default function About() {
  return (
        <div className="conatiner d-flex justify-content-around mx-auto my-5">
            <div className="banner aside mx-auto">

                <img 
                className='img-fluid'
                style={{height:"500px",width:"500px",borderRadius:"5%"}}
                src="image4.jpg" alt="" />


            </div>

            <div className="content container mx-auto my-auto "
            style={{width:"500px"}}
            >
                <h1 className="text-center">About Us</h1>
                <p className="text-center">Lorem ipsum dolor sit am
                Lorem ipsum dolor sit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita ratione quisquam corporis impedit repellendus dolore porro! Ab tempora molestiae animi, recusandae facilis veritatis maxime! Vero eveniet atque natus unde molestiae dignissimos pariatur nostrum? Doloribus atque ipsam illum! Facilis dolores eveniet ducimus distinctio a explicabo id tenetur saepe voluptate eos. amet consectetur adipisicing elit. Perferendis ratione ad minus, similique, sed quo, illum in est quam temporibus ea eaque impedit itaque tempore molestiae dolor atque iusto amet?z
                </p>
                <button className="btn btn-dark">Read More</button>
            </div>
        </div>
  )
}
