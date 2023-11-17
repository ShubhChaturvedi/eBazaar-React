import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) =>  {
    e.preventDefault()
    console.log(email, password)
    const data = await axios.post('http://localhost:8000/checkCustomerAuth', {
      email: email,
      password: password
    })

    if(data.data === true) {
      alert('Login success')
    }
    else{
      alert('Wrong email or password')
    }
  }

  return (
    <>
    <div className="w-50 mx-auto my-5">
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button
  onClick={handleSubmit}
  type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
    </>
  )
}
