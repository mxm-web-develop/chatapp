import { useContext } from "react"
import { ActionType, AppContext, AppState } from "../../store"

const Header = ()=>{
    const [,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const add_new_friend= ()=>{
        const time = new Date().getTime()
        dispatch({type:ActionType.ADD_FIREND,payload:    {
            userId:'sd4'+time.toString().slice(-6),
            avator:'/photo.png',
            userName:'机器人'+ time.toString().slice(-5),
            userIntro:'随机生成的假用户'
        },  })
    }

    return (
        <div className='flex px-2 py-2 items-center'>
        <div className='center text-xs opacity-30 flex-grow'>好友列表</div>
        <div className='right cursor-pointer' onClick={add_new_friend}>
            +
        </div>
    </div>
    )
}

export default Header