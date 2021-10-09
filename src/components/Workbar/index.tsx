import { Ref, RefObject, useContext, useEffect, useState } from "react"
import { ActionType, AppContext, AppState, ChatStreamItem } from "../../store"
import ChatBoxFrame from "../../layouts/ChatBoxFrame"
import ChatDisplay from './ChatDisplay'
import ChatToolbar from './ChatToolbar'
import UseChat, { MSG_TYPE } from "../../useChat"
import { loginUser } from "../../mokeData/loginUser"



const WorkBar = ()=>{
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const [msgList,setMsgList] = useState<ChatStreamItem[]>([])
    const {getFriendMsg} = UseChat()
    useEffect(()=>{
       const data = getFriendMsg(state.activedChat)
       setMsgList(data)
    },[state])


    const handleSubmit = (content:any| undefined,type:MSG_TYPE)=>{
        const time = new Date().getTime()
        if(content){
            dispatch({type:ActionType.SUBMIT_MSG,payload:{   
                from:loginUser,
                to:state.activedChat,
                id:'mxmchat_'+time,
                date:time,
                type:type,
                content:content
                }
            })
            const data = getFriendMsg(state.activedChat)
            setMsgList(data)
        }
    }

    const handleDisplayer =(item:RefObject<Element>)=>{
        if(item&&item.current){
            if(item.current?.clientHeight+item.current?.scrollTop !=  item.current?.scrollHeight){
               item.current.scrollTop = item.current?.scrollHeight   
            }
        } 
    }
    return(
        <div className="w-full h-full">
            {
                !state.activedChat?
                <div className="opacity-30 flex justify-center items-center h-full w-full bg-gray-700">MxM Chat App</div> :
                <ChatBoxFrame topBar={<ChatDisplay chatStream={msgList} getDisplayer={handleDisplayer} />} toolsBar={<ChatToolbar msgOnsubmit={handleSubmit} />}/>
            }
        </div>
    )
}
export default WorkBar