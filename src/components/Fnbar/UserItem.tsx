import { ReactElement, useCallback, useContext, useEffect, useState } from "react"
import { ActionType, AppContext, AppState } from "../../store"

export interface User{
    avator:string,
    userId:string,
    userName:string,
    userIntro?:string
}


interface IProps {
    children?:ReactElement,
    userData:User,
    isActived?:boolean,
    itemOnclick?:(data:any) => void
}


const UserItem = (props:IProps)=>{
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const handleItemClick =(data:User)=>{
        dispatch({type:ActionType.CHANGE_ACTIVED,payload:data.userId})
    }

    return(
        <div className={props.isActived ?'flex w-full py-3 px-2 items-center border-t border-b cursor-pointer text-white bg-gray-600':'flex w-full py-3 px-2 items-center border-t border-b cursor-pointer'} onClick={()=>handleItemClick(props.userData)}> 
            <div className='avator w-12'>
                <img src={props.userData.avator}/>
            </div>
            <div className='user text-sm'>
                {props.isActived}
                <div>{props.userData.userName}</div>
               <div className=' text-xs opacity-30'>{props.userData.userIntro}</div> 
            </div>
        </div>
    )
}

export default UserItem