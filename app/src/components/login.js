import React, { useState, useContext } from "react";
import { UserContext } from "./ContextUser";
import { io } from "socket.io-client";


export function Login() {
  const [inputUsername, setInputUsername] = useState(null)
  //const [room, setRoom] = useState(null)

  const socket = io('http://localhost:5000');

  const user = UserContext

  const { login, logged } = useContext(UserContext);


  console.log(logged)
  const joinChat = () => {
    console.log(inputUsername/*, room*/)
    if (inputUsername !== '' /*&& room != ''*/) {
      login(inputUsername)
      socket.emit('join', { username: inputUsername, room: user.Consumer.room })
    }
  }


  return (
    <div className=' rounded-2xl bg-gray-200 p-6 absolute text-start shadow-md overflow-hidden border-solid border border-gray-300'>
      <h1 translate='no' className='block text-center text-7xl p-6'>DEMO CHAT</h1>
      <h1 className=' w-full text-xl'>como desea ser llamado?</h1>
      <div className=' flex gap-2'>
        <input placeholder='ingrese su nombre' className=' outline-none grow px-2 text-gray-700 text-lg' onChange={(e) => { setInputUsername(e.target.value) }}></input>
        <input
          type="button"
          value="ingresar"
          className="bg-blue-500 text-white w-fit px-6 py rounded-md hover:bg-blue-800 hover:cursor-pointer"
          onClick={() => { joinChat() }}
        />
      </div>
    </div>)
}
