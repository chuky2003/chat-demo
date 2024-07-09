import React, { useEffect, useContext, useState, useRef } from "react";
import { UserContext } from "./ContextUser";
import { SvgSend } from "./svgs/svgSend";
import { io } from "socket.io-client";

export function SendPanel() {
  const { user, room } = useContext(UserContext)

  const [nuevoMensaje, setNuevoMensaje] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)

  const socket = io('http://localhost:5000');
  const textarea = useRef(null)




  const handlerSetMessage = (e) => {
    const valor = e.target.value

    let regex = /^[\s\n]*$/;
    if (!regex.test(valor)) {
      setNuevoMensaje(e.target.value)
      setActiveBtn(true)

    } else {
      setActiveBtn(false)
      setActiveBtn(false)
    }
  }



  const enviarMensaje = () => {
    if (activeBtn) {

      socket.emit('message', { room: room, username: user, msg: nuevoMensaje });
      textarea.current.value = "";
      setNuevoMensaje("")
      setActiveBtn(false)
    }
  }


  useEffect(() => {
    if (textarea.current) {
      const text = textarea.current
      text.style.height = "auto";
      text.style.height = Math.min(text.scrollHeight, 80) + "px";
    }
  }, [nuevoMensaje])

  return (<div className=' flex justify-between drop-shadow bg-gray-200 rounded-3xl px-4 py-2'>
    <textarea
      dir='auto'
      ref={textarea}
      placeholder="Ingrese un mensaje"
      className=" gray-700 bg-transparent rounded-md min-w-min resize-none outline-none grow"
      rows={1}
      onChange={(e) => {
        handlerSetMessage(e)
      }}

      onKeyDown={(e) => {

        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault()
          enviarMensaje();
        }
      }}

    />

    <div className='flex h-full justify-center align-middle items-center'>
      <div
        onClick={() => {
          enviarMensaje();
        }}
        className=" w-fit prueba min-w-min px-2 flex  "

      ><button disabled={!activeBtn}><SvgSend actived={activeBtn} /></button>
      </div>
    </div>
  </div>
  )
}
