import React from 'react'
import { useEffect } from 'react';
import { addqoutes } from '../redux/qutesaction'
import { useSelector, useDispatch } from "react-redux";

export default function Qutes() {
  const dispatch= useDispatch();
  const qutes = useSelector((state) => state.qutes.qoutes);
  useEffect(()=>{
    fetch(
      `https://www.breakingbadapi.com/api/quotes`
    )
      .then((res) => res.json())
      .then((data) => dispatch(addqoutes(data)));

  },[])


  return (
    <div>
      {qutes.map((data)=>(
        <div key={data.quote_id}>
          <p className='pler'>{data.quote}     ({data.author})</p>
          <hr className='siyah'></hr>
        </div>

      ))}
      
      
    </div>
  )
}
