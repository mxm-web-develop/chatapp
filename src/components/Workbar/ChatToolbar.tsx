import { Input } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import {  ReactElement, Ref, RefObject, useContext, useRef, useState } from 'react';
import { MSG_TYPE } from '../../useChat';
import { ActionType, AppContext, AppState } from '../../store';
import { loginUser } from '../../mokeData/loginUser';

interface IProps{
    children?:ReactElement,
    msgOnsubmit:(context:any | undefined,type:MSG_TYPE) => void
}

const ChatToolbar = (props:IProps)=>{
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const { Search } = Input;
    const [inputVal,setInputVal] = useState<string>('')
    const inputOnChange = (e:any)=>{
        setInputVal(e.target.value)
    }
    const btnOnClick =()=>{
        props.msgOnsubmit(inputVal,MSG_TYPE.TEXT)
        setInputVal('')
    }
    const file = useRef<HTMLInputElement>(null)
    const imageUpload = ()=>{
        file.current?.click()
    }
    const upload = (item:any)=>{
        const res = item.target.files[0]
        setTimeout(()=> {
            props.msgOnsubmit(res,MSG_TYPE.IMG),
            item.target.value = ''
        },300)
    }
    return(
        <div className=" w-full absolute bottom-0 left-0 px-3 border-t border-gray-100">
            <div className="kits flex py-3">
                <div className='cursor-pointer' onClick={imageUpload}><PictureOutlined style={{ fontSize: '16px', color: '#08c' }}/><input type="file" ref={file} accept={MSG_TYPE.IMG} className='hidden' onChange={upload}/></div> 
            </div>  
            <div className="inputer w-full flex pb-3">
                <Search placeholder="输入聊天内容" enterButton="发送" maxLength={500} value={inputVal} onChange={inputOnChange} onSearch={btnOnClick}></Search>  
            </div>
        </div>
    )
}
export default ChatToolbar