import React, { useState } from 'react';
import AddProduct from './AddProduct';

export default function Room(props) {
  const [showProperty, setShowProperty] = useState(false);


  const show = () => {
    if (showProperty === false) {
      return <div> <AddProduct roomType = {props.type} products = {props.products} addProduct={props.addProduct} index={props.index} /> </div>;
    } else {
      return <div> <button onClick={change}>+ product</button> </div>;
    }
  };

  const change = () => {
    setShowProperty(!showProperty);
  };


  return (
    <div>
      <h1 className='name'>room name: <span>{props.name}</span> </h1>
      <h3 className='room-name'>room type: <span>{props.type}</span> </h3>

      {show()}

      {props.products && props.products.map((val, index) => {
        let condition = val.condition ? 'green' : 'red';
        return (
          <button className='items' style={{ backgroundColor: condition }} onClick={() => { props.checkIfOnOrOff(props.index, index) }}>{val.type}</button>
        );
      })}
    </div>
  );
}
