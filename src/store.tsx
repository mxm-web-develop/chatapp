import {createContext, ReactElement,Reducer,useEffect,useReducer, useState} from 'react'
import { User } from './components/Fnbar/UserItem'
import chat from './mokeData/chat'
import users from './mokeData/users'
export interface ChatStreamItem{
    to:string,
    from:string,
    id:string,
    date:Date,
    type:string,
    content:string
}
export interface Action{
    type:ActionType,
    payload:any
}
export type AppState = {
    activedChat:string,
    userList:User[],
    chatStream:ChatStreamItem[],

}
export enum ActionType{
    CHANGE_ACTIVED,
    ADD_FIREND,
    SUBMIT_MSG
}


const reducer = (state:AppState,action:Action):any=>{
    switch(action.type){
        case ActionType.CHANGE_ACTIVED:
            if(state.activedChat !== action.payload){
                state.activedChat = action.payload
                return {
                    ...state,
                    activedChat:action.payload
                }
            }else{
                return {
                    ...state
                }
            }
        case ActionType.ADD_FIREND:
            state.userList.push(action.payload)
            return {
                ...state
            }
        case ActionType.SUBMIT_MSG:
            state.chatStream.push(action.payload)
            return {
                ...state
            }

        default:
            return {
                ...state
            }
        
    }
}

const initialState = {
    activedChat:'',
    userList:users,
    chatStream:chat
}
interface IProps{
    children?:ReactElement
}

export const AppContext = createContext<any>(initialState)


export const AppProvider = (props:IProps) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    AppContext.Consumer
    return(
        <AppContext.Provider value={[state,dispatch]}>{props.children}</AppContext.Provider>
    )
}