import { useState } from "react"
interface ChatStreamItem {
    context:string,
    date:Date
}
type ChatStream = [string,ChatStreamItem[]]

const UseChat = ()=>{
    const [chat,setChat] = useState<ChatStream[]>([])
    return{
        haha:'sdfll'
    }
}

export default UseChat