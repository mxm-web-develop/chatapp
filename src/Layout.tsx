import { ReactElement } from "react"

interface IProps {
    children:any,
    leftBar:ReactElement,
    rightBar:ReactElement
}


const Layout = (props:IProps)=>{
    return(
        <div className='flex w-chat-w h-chat-h bg-white'>
            <div className='left w-44 border-r'>
                {props.leftBar}
            </div>
            <div className='right'>
                {props.rightBar}
            </div>
        </div>
    )

}

export default Layout