import React, { useState } from 'react';

export default function AddProduct(props) {
  const [product, setProduct] = useState('air');
  const [isStereoAdded, setIsStereoAdded] = useState(false);

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleAddProduct = () => {
    if (props.products.length >= 5 ){
      return
    }
    console.log("type: ",props.roomType);
    console.log(props.roomType != "Restroom" && product === "boiler");
    if (props.roomType != "Restroom" && product === "boiler"){
      return
    }
    console.log(props);
    if (product === 'stereo' && isStereoAdded) {
      return;
    }

    if (product === 'stereo') {
      setIsStereoAdded(true);
    }

    props.addProduct(props.index, product);
  };

  return (
    <div>
      <select onChange={handleProductChange}>
        <option value="lamp">Lamp</option>
        <option value="stereo">Stereo</option>
        <option value="air">Air-Conditioner</option>
        <option value="boiler">Boiler</option>
      </select>

      <button className='add-product-btn' onClick={handleAddProduct}>Add product</button>
    </div>
  );
}
