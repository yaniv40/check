import React from 'react'
import { Link } from 'react-router-dom'

export default function Rooms(props) {



  return (
    <div>

      {props.rooms.map((val)=>{
          
        return <Link to={`room${val.name}`}><button className='room-names' style={{backgroundColor:val.color}}>{val.name}</button></Link>

      })}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Link to={'/addRoom'}><button className='room-plus-btn'>+</button></Link>

    </div>
  )
}
