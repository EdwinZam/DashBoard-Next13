'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCountState, resetCount, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react"


interface Props {
    value?: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async()=>{
  const data = await fetch('/api/counter').then(res => res.json());

  return data as CounterResponse;
}

export const CartCounter = ({value= 0}: Props) => {
  
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCountState(value));
  // }, [dispatch, value])
  
  // const [counter, setCounter] = useState(value)

  // const incrementar = () => {
  //   setCounter( counter+1)
  // }  
  // const decrementar = () => {
  //   setCounter(counter-1)
  // }

  useEffect(() => {
    getApiCounter()
      .then( ({count})=> dispatch(initCountState(count)))
  }, [])
  

  return (
    <>
        <span className="text-9xl"> {count} </span>
        <div className="flex">
        <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={()=>dispatch(addOne())}
        > 
        +1
        </button>
        <button 
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={()=>dispatch(substractOne())}
        >
        -1
        </button>
        </div>
    </>
  )
}
