import { DeleteOutlined } from "@ant-design/icons/lib/icons"
import { Modal } from "antd"
import Tooltip from "antd/lib/tooltip"
import { ReactElement,useContext,useRef, useState } from "react"
import { ModalContext } from "../../layouts/AppFrame"
import { loginUser } from "../../mokeData/loginUser"
import { ChatStreamItem } from "../../store"
import useChat from "../../useChat"

interface IProps{
    children?: ReactElement,
    data:ChatStreamItem
}


const ChatBox = (props:IProps)=>{
    const {data} = props

    const [modal,setModal] = useContext<any>(ModalContext)
    const {getUserById,renderTime,renderMsg} = useChat()
    return (
        <>
        <div className={data.to === loginUser?'w-full flex flex-row ':'w-full flex flex-row-reverse text-right '}>
            <Tooltip mouseEnterDelay={0.7}  autoAdjustOverflow placement={ data.to === loginUser?"rightTop":"leftTop"} title={()=> 
                data.from === loginUser?
                    <div className='text-white cursor-pointer text-sm px-3'>
                    <div onClick={()=>setModal({...modal,show:true,title:'撤销该消息',params:data,method:'delete',content:'删除这条消息'})}>
                    <DeleteOutlined style={{ fontSize: '18px', color: '#fff' }}/>
                    </div>
                </div> 
                :""
            }>
                <div className='box w-5/12 my-1 shadow-lg rounded-md border-gray-50 px-3 py-3 cursor-pointer'>
                    <div>
                        <div className=' text-xs opacity-60'>{getUserById(data.from)}</div>  
                        <div className=' text-xs opacity-30'>{`${renderTime(data.date).year}-${renderTime(data.date).moth+1}-${renderTime(data.date).day}  ${renderTime(data.date).h}:${renderTime(data.date).m}`}</div>  
                        <div className=' text-sm opacity-80 my-2'>{renderMsg(data.content,data.type)}</div>
                    </div>    
                </div>
            </Tooltip>
        </div>
        </>
    )
}


export default ChatBox