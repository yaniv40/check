import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import AddRoom from './components/AddRoom';
import Rooms from './components/Rooms';
import Room from './components/Room';


function App() {

  const[rooms,setRooms] = useState([])
  

  const createNewRoom =(type,name,color) =>{

    setRooms([...rooms,{type:type,name:name,color:color,products:[]}]) // [...rooms , newRoomObject  ]

  }

  const addProduct =(index,typeOfProduct)=>{

    let temp = { condition:false,type:typeOfProduct }
    rooms[index].products.push(temp)
    setRooms([...rooms])
  }  

  const checkIfOnOrOff = (indexOfRoom,indexOfProduct) =>{

    rooms[indexOfRoom].products[indexOfProduct].condition = !rooms[indexOfRoom].products[indexOfProduct].condition
    setRooms([...rooms])

  }

 

  return (
    <div className="App">
      <h1 className='main-title'>Smart House</h1>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Rooms rooms={rooms}/>}/>
    <Route path='/addRoom' element={<AddRoom createNewRoom={createNewRoom}/>}/>
    {rooms.map((val,index)=>{
      return <Route path={`room${val.name}`} element={<Room checkIfOnOrOff={checkIfOnOrOff} addProduct={addProduct} index={index} type={val.type}  name={val.name} products={val.products} />}/>
    })}

    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
