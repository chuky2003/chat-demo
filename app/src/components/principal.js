import { useContext } from "react";

import { ChatPanel } from "./chatPanel";
import { UserContext } from "./ContextUser";
import { SendPanel } from "./sendPanel";






export function Principal() {

  const { user } = useContext(UserContext)

  return (
    < div className=' p-6 bg-gray-200 max-w-md h-4/6 w-full shadow-md rounded-2xl h-fit ' >
      <div className=" divide-y divide-gray-300 h-fit">
        <div className=" flex items-center gap-2">
          <svg className=' min-w-fit' viewBox="0 0 24 24" width="38" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
          <p className=" text-start">{user}</p>
        </div>
        <ChatPanel />
        <SendPanel />
      </div>

    </div >

  )
}
