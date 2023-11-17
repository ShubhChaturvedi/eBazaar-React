import React, {useState, useEffect, useContext} from 'react'
import ContextCreate from '../context/ContextCreate';

export default function HookByUseState () {
    const [fakeState, setFakeState] = useState(0);
    const [fakeState2, setFakeState2] = useState("shubh");

    const a = useContext(ContextCreate)

    useEffect(()=>{

      setFakeState(5000);
      // eslint-disable-next-line

    },[fakeState2==="shubham"])


    useEffect(()=>{

      setFakeState2("shubh");
      // eslint-disable-next-line

    },[fakeState])
  return (
    <>
    <div className="decrement m-5">
        <button onClick={() => setFakeState(fakeState - 1)}>Decrement</button>
    </div>
    <div className='m-5'>{fakeState}</div>
    <div className="increment m-5">
        <button onClick={() => setFakeState(fakeState + 1)}>Increment</button>
    </div>

    <p>the name of the candidate is {a.name} and address is {a.address} and age is {a.age}

    </p>



    <div>
        <button onClick={() => setFakeState2("shubham")}>Change Name</button>
        <div>{fakeState2}</div>
    </div>
    </>
  )
}
