import { useEffect, useRef, useState } from "react"


export function Svg() {
    const [sv,setSv]=useState(false)
    const a=useRef(null)
    useEffect(()=>{
        
        //const g=document.getElementById('pathh')
        if(sv==true){
            a.current.setAttribute("stroke","#505050")
            a.current.setAttribute("fill","#505050")
        }else{
            a.current.setAttribute("stroke","#b5b5b5")
            a.current.setAttribute("fill","#b5b5b5")
        }
    },[sv])

    return (
        <svg className="text-gray-500" onMouseEnter={()=>{setSv(true)}} onMouseLeave={()=>{setSv(false)}} viewBox="0 0 24 24" width='20' fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" ></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path ref={a}  id="pathh" fill-rule="evenodd" clip-rule="evenodd" stroke="#c81414" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#808080"></path>
            </g>
        </svg>
    )
}