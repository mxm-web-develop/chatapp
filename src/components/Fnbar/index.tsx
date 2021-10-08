import UserItem, { User } from "./UserItem"
import Header from "./Header"
import { useContext, useEffect } from "react"
import { ActionType, AppContext, AppState } from "../../store"

const Fnbar = ()=>{
    
    const [state,dispatch] = useContext<[state:AppState,dispatch:any]>(AppContext)
    useEffect(()=>{

    },[state.activedChat])

    return(
        <div>
            <Header></Header>
            {
                state&&state.userList&&state.userList.map((i: User)=> <UserItem userData={i} key={i.userId}  isActived={state.activedChat === i.userId?true:false}></UserItem>)
            }
        </div>
    )

}

export default Fnbar 