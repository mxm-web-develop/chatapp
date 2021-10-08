import { ReactElement } from "react"

interface IProps {
    children:any,
    leftBar:ReactElement,
    rightBar:ReactElement
}


const AppFrame = (props:IProps)=>{
    return(
        <div className='flex w-chat-w h-chat-h bg-white shadow-md'>
            <div className='left w-44 border-r'>
                {props.leftBar}
            </div>
            <div className='right flex-grow'>
                {props.rightBar}
            </div>
        </div>
    )

}

export default AppFrame