import { useState,useEffect } from "react"

export function SvgSend(props) {
    const [actived, setActived] = useState(props.actived);
    useEffect(() => {
        setActived(props.actived);
    }, [props.actived]);


    return (
        <svg fill={actived ? "#000000" : "#a9a9a9"} viewBox="0 0 20 20" width={24} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"></path>
            </g>
        </svg>
    );
}
