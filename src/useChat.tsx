import { createContext, useContext, useReducer, useState } from "react"
import users from './mokeData/users'
import { User } from "./components/Fnbar/UserItem"
import {filter as _filter, sortBy as _sortBy } from 'lodash'
import { Action, ActionType, AppContext, AppState } from "./store"
import { loginUser } from "./mokeData/loginUser"
interface ChatStreamItem {
    context:string,
    date:Date
}
type ChatStream = [string,ChatStreamItem[]]
export enum MSG_TYPE{
    TEXT = 'text/plain',
    IMG ='image/*'
}

const UseChat = ()=>{
    const [userList,setUserlist] = useState<User[]>(users)
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    function getFriendMsg(userId:string){
        const arr =  _filter(state.chatStream,(i)=>i.to ===userId) 
        const arr2 = _filter(state.chatStream,(i)=>i.from === userId)
        const reslut = arr.concat(arr2)
        const output = _sortBy(reslut,(i)=> i.date)
        return output
    }

    function getUserById(userId:string) {
        if(userId === loginUser){
            return '我'
        }else{
            return  state.userList.filter(i=> i.userId === userId)[0].userName
        } 
    }

    function renderTime(timeStamp:number|string|Date):{year:number, moth:number, day:number,h:number, m:number}{
        const res = new Date(Number(timeStamp)).getFullYear()
        const res2 = new Date(Number(timeStamp)).getMonth()
        const res3 = new Date(Number(timeStamp)).getDay()
        const res4 = new Date(Number(timeStamp)).getHours()
        const res5 = new Date(Number(timeStamp)).getMinutes()
        return {
            year:res,
            moth:res2,
            day:res3,
            h:res4,
            m:res5
        }
        
    }

    async function removeMsg(params:any){
        await setTimeout(() => dispatch({type:ActionType.DELETE_MSG,payload:params.id}),800)
            getFriendMsg(params.to)
        return true
    }

    function renderMsg(msg:any,msgType:string=MSG_TYPE.TEXT){
        let imgUrl;
        if(msgType === MSG_TYPE.IMG){
             imgUrl = URL.createObjectURL(msg)
        } 
        switch(msgType){
            case MSG_TYPE.TEXT :
                return  <div className=' text-sm opacity-80 my-2'>{msg}</div>
            case MSG_TYPE.IMG:
                return  <img src={imgUrl} className='w-full'></img>
        }
    }


    return{
        getFriendMsg,
        getUserById,
        renderTime,
        renderMsg,
        removeMsg
    }
}



export default UseChat