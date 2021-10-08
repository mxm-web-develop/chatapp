import { useContext } from "react"
import { ActionType, AppContext, AppState } from "../../store"

const Header = ()=>{
    const [,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    const add_new_friend= ()=>{
        dispatch({type:ActionType.ADD_FIREND,payload:    {
            userId:'sd4124151511',
            avator:'sldfjklsdf.png',
            userName:'张老三',
            userIntro:'天下第的'
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