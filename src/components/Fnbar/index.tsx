import UserItem from "./UserItem"

const Fnbar = ()=>{
    return(
        <div>
            <div className='flex px-2 py-2 items-center'>
                <div className='left'></div>
                <div className='center text-xs opacity-30 flex-grow'>好友列表</div>
                <div className='right cursor-pointer'>
                    +
                </div>
            </div>
            <UserItem avator='sdfsdf' userId='sdfsdf' userName='zhang' userIntro='asldfjldksfj'></UserItem>
        </div>
    )

}

export default Fnbar 