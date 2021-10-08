import { ReactElement } from "react"
import { loginUser } from "../../mokeData/loginUser"
import { ChatStreamItem } from "../../store"
import useChat from "../../useChat"

interface IProps{
    children?: ReactElement,
    data:ChatStreamItem
}

const ChatBox = (props:IProps)=>{
    const {data} = props
    const {getUserById,renderTime} = useChat()
    return (
        <div className={data.to === loginUser?'w-full flex flex-row':'w-full flex flex-row-reverse text-right'}>
            <div className='box w-5/12 my-1 shadow-lg rounded-md border-gray-50 px-3 py-3'>
                <div>
                    <div className=' text-xs opacity-60'>{getUserById(data.from)}</div>  
                    <div className=' text-xs opacity-30'>{`${renderTime(data.date).year}-${renderTime(data.date).moth+1}-${renderTime(data.date).day}  ${renderTime(data.date).h}:${renderTime(data.date).m}`}</div>  
                    <div className=' text-sm opacity-80 my-2'>{data.content}</div>
                </div>    
            </div>
        </div>
    )
}


export default ChatBox