import { createContext,useState } from "react";

const Alldata = createContext()

export const Roomprovider = ({children}) =>{

    const [currentroom,setCurrentroom]=useState(0)



    

    const[rooms,setRooms]= useState([])


    const addRoom = (room,name,color) =>{
        setRooms([...rooms,{room,name,color,products:[]}])
        
    }
    return (
        <Alldata.Provider value={{rooms, addRoom,setCurrentroom,currentroom}}>{children}</Alldata.Provider>

    )
}

export default Alldata;