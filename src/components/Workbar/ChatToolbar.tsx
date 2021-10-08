import { Input } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import {  ReactElement, useState } from 'react';

interface IProps{
    children?:ReactElement,
    textOnsubmit:(context:string | undefined) => void
}

const ChatToolbar = (props:IProps)=>{
    const { Search } = Input;
    const [inputVal,setInputVal] = useState<string>('')
    const inputOnChange = (e:any)=>{
        setInputVal(e.target.value)
    }
    const btnOnClick =()=>{
        props.textOnsubmit(inputVal)
        setInputVal('')
    }
    return(
        <div className=" w-full absolute bottom-0 left-0 px-3 border-t border-gray-100">
            <div className="kits flex py-3">
                <div className='cursor-pointer'><PictureOutlined style={{ fontSize: '16px', color: '#08c' }}/></div> 
            </div>  
            <div className="inputer w-full flex pb-3">
                <Search placeholder="输入聊天内容" enterButton="发送" maxLength={500} value={inputVal} onChange={inputOnChange} onSearch={btnOnClick}></Search>  
            </div>
        </div>
    )
}
export default ChatToolbar