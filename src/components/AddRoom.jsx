import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRoom(props) {
  const nav = useNavigate();

  const [typeOfRoom, setTypeOfRoom] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const createNewRoom = () => {
    if (name.length === 0) {
      alert('Please enter a room name.');
      return;
    }

    if (color.length < 3) {
      alert('Please enter at least 3 characters for the color.');
      return;
    }

    if (typeOfRoom === '') {
      alert('Please select a room type.');
      return;
    }

    props.createNewRoom(typeOfRoom, name, color);
    nav('/');
  };

  return (
    <div>
      <select className="select-tag" value={typeOfRoom} onChange={(e) => setTypeOfRoom(e.target.value)}>
        <option value="" disabled>Select a room type</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Restroom">Restroom</option>
        <option value="Kitchen">Kitchen</option>
      </select>

      <br />

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your room name"
        maxLength={5}
      />
      <br />
      <input
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="Enter your desired color"
      />
      <br />
      <br />

      <button onClick={createNewRoom}>Create new room</button>
    </div>
  );
}
