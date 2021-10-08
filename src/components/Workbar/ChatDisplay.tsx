import { ReactElement, useContext } from "react"
import ChatBox from './ChatBox'
import { ActionType, AppContext, AppState, ChatStreamItem } from "../../store"
interface IProps{
    children?:ReactElement,
    chatStream:ChatStreamItem[]
}

const ChatDisplay = (props:IProps)=>{
    const [,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const goback = ()=>{
        dispatch({type:ActionType.CHANGE_ACTIVED,payload:''})
    }
    return(
        <div className=''>
            <div className='border-b border-gray-100 pb-2 text-gray-300  text-xs  text-right'> <span className=' cursor-pointer' onClick={goback}>{'< 返回'}</span> </div>
            <div className='display-container h-display-h overflow-y-scroll w-full px-5 py-2'>
                {
                    props.chatStream.map(i=> <ChatBox key={i.id} data={i}></ChatBox>)
                }
            </div>  
        </div>
    )
}
export default ChatDisplay