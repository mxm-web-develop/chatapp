import { ReactElement } from "react"

interface IProps {
    children?:ReactElement,
    topBar:ReactElement,
    toolsBar:ReactElement
}


const ChatBoxFrame = (props:IProps)=>{
    return(
        <div className='flex flex-col bg-white w-full h-full relative px-3 py-2'>
            <>
                {props.topBar}
            </>
            <>
                {props.toolsBar}
            </>
        </div>
    )

}

export default ChatBoxFrame