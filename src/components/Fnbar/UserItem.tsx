import { ReactElement } from "react"

interface IProps {
    children?:ReactElement,
    actived?:boolean,
    avator:string,
    userId:string,
    userName:string,
    userIntro?:string
}
const UserItem = (props:IProps)=>{

    return(
        <div className='flex w-full py-3 px-2 items-center border-t border-b cursor-pointer'>
            <div className='avator w-12'>
                <img src={props.avator}/>
            </div>
            <div className='user text-sm'>
                <div>{props.userName}</div>
               <div className=' text-xs opacity-30'>{props.userIntro}</div> 
            </div>
        </div>
    )
}

export default UserItem