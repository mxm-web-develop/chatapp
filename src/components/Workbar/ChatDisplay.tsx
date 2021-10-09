import { ReactElement, useContext, useEffect, useRef } from "react"
import ChatBox from './ChatBox'
import { ActionType, AppContext, AppState, ChatStreamItem } from "../../store"
interface IProps{
    children?:ReactElement,
    chatStream:ChatStreamItem[],
    getDisplayer:(item:any)=>void
}

const ChatDisplay = (props:IProps)=>{
    const [,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const goback = ()=>{
        dispatch({type:ActionType.CHANGE_ACTIVED,payload:''})
    }
    const displayer = useRef(null)
    useEffect(()=>{

        props.getDisplayer(displayer)
    },[props.chatStream])
    return(
        <div>
            <div className='border-b border-gray-100 pb-2 text-gray-300  text-xs  text-right'> <span className=' cursor-pointer' onClick={goback}>{'< 返回'}</span> </div>
            <div className='display-container h-display-h overflow-y-scroll w-full px-5 py-2' ref={displayer}>
                {
                    props.chatStream.map(i=> <ChatBox key={i.id} data={i}></ChatBox>)
                }
            </div>  
        </div>
    )
}
export default ChatDisplay