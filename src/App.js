import React, { useState } from 'react';
import { AgeColumns } from '../components/Table.jsx';
import { Board1 } from '../components/dnd.jsx';
import './style.css';

export default function App() {
  const [users, setUsers] = useState([
    {
      name: 'sridhar',
      age: '18',
    },
    {
      name: 'sr',
      age: '24',
    },
    {
      name: 'si',
      age: '38',
    },
    {
      name: 'sr',
      age: '54',
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
      age,
    };

    setUsers([...users, user]);
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAge('');
  };

  return (
    <div className="p-2">
      <h1 className="text-center">True Draggable</h1>
      <div className="flex justify-between">
        <div>Age Table</div>
        <button
          className="mx-4 border-2 px-2"
          onClick={() => setShowAdd(!showAdd)}
        >
          Add
        </button>
      </div>
      <AgeColumns users={users} />
      {showAdd && (
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="border-2 my-4 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="border-2 my-4 p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={phone}
            type="number"
            placeholder="Phone"
            className=" border-2 my-4 p-2"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            value={age}
            type="number"
            placeholder="Age"
            className=" border-2 my-4 p-2"
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="flex justify-end">
            <button>Cancel</button>
            <button className="pl-6">Add</button>
          </div>
        </form>
      )}
      {/* <Board1 /> */}
    </div>
  );
}
