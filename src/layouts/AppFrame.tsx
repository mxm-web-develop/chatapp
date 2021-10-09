import { Modal } from "antd"
import React from "react"
import { createContext, ReactElement, useRef, useState } from "react"
import { ActionType } from "../store"
import useChat from "../useChat"

interface IProps {
    children:any,
    leftBar:ReactElement,
    rightBar:ReactElement
}

export const ModalContext = createContext<any>(null)

const AppFrame = (props:IProps)=>{
    const {removeMsg} = useChat()
    const [modal,setModal] = useState({
        show:false,
        title:'',
        content:'',
        method:'',
        params:null as any
    })
    const handleModalOk = async ()=>{
        if(modal.params){
            await removeMsg(modal.params)
            setModal({
                show:false,
                title:'',
                content:'',
                method:'',
                params:null as any
            })
        }
    }
    return(
      
        <ModalContext.Provider value={[modal,setModal]}>
            <React.StrictMode>
            <Modal
                title={modal.title}
                destroyOnClose
                className='w-chat-w h-chat-h '
                visible={modal.show}
                onCancel={()=>setModal({...modal,show:false})}
                onOk={handleModalOk}
            >
                {modal.content}
            </Modal>
            </React.StrictMode>
            <div className='flex w-chat-w h-chat-h bg-white shadow-md'>
                <div className='left w-44 border-r'>
                    {props.leftBar}
                </div>
                <div className='right w-full '>
                    {props.rightBar}
                </div>
            </div>
        </ModalContext.Provider>
  
    )

}

export default AppFrame