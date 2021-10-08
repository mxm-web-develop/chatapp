import { useContext, useEffect, useState } from "react"
import { ActionType, AppContext, AppState, ChatStreamItem } from "../../store"
import ChatBoxFrame from "../../layouts/ChatBoxFrame"
import ChatDisplay from './ChatDisplay'
import ChatToolbar from './ChatToolbar'
import UseChat from "../../useChat"
import { loginUser } from "../../mokeData/loginUser"



const WorkBar = ()=>{
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const [msgList,setMsgList] = useState<ChatStreamItem[]>([])
    const {getFriendMsg} = UseChat()
    useEffect(()=>{
       const data = getFriendMsg(state.activedChat)
       setMsgList(data)
    },[state.activedChat,state.chatStream])


    const handleSubmit = (content:string| undefined)=>{
        const time = new Date().getTime()
        dispatch({type:ActionType.SUBMIT_MSG,payload:{   
            from:loginUser,
            to:state.activedChat,
            id:'mxmchat_'+time,
            date:time,
            type:'text',
            content:content
            }
        })
        const data = getFriendMsg(state.activedChat)
        setMsgList(data)
    }

    return(
        <div className="w-full h-full">
            {
                !state.activedChat?
                <div className="opacity-30 flex justify-center items-center h-full w-full bg-gray-700">MxM Chat App</div> :
                <ChatBoxFrame topBar={<ChatDisplay chatStream={msgList}/>} toolsBar={<ChatToolbar textOnsubmit={handleSubmit} />}/>
            }
        </div>
    )
}
export default WorkBar