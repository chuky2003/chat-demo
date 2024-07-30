import React, { useRef, useState, useEffect, useLayoutEffect } from "react"
import { io } from "socket.io-client"



export function ChatPanel() {

  const conteinerMsgs = useRef(null)

  const [messages, setMessages] = useState([])

  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.on('message', (data) => {

      setMessages(mensajes => [...mensajes, data]);

    })
  }, [])

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {

    if (conteinerMsgs.current) {
      conteinerMsgs.current.scrollTop = conteinerMsgs.current.scrollHeight;
    }
  };
  return (

    < div className=' flex-1 overflow-y-auto overflow-x-auto w-full min-h-96 max-h-96' ref={conteinerMsgs} >
      {
        messages.map((message, index) => (

          <li className=' font-light mb-5 list-none ' key={index}>
            <div className=' flex flex-row text-start'>
              {message.username && (
                <>
                  <svg className=' min-w-fit' viewBox="0 0 24 24" width="38" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                  <div style={{ wordBreak: 'break-word' }} className=' w-full'>
                    <p className=' font-normal text-blue-600 contents'>
                      {message.username}
                      <br />
                    </p>
                    <p className=' whitespace-pre-wrap w-full '>{message.msg}</p>

                  </div>
                </>
              )}

            </div>
          </li>

        ))
      }
    </div >)
}
