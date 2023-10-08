import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { clearMessages } from "../../features/chat/chatSlice"

/* When the user leaves a chat room, this hook will clean all the messages there for him, so when he enters that same room again, there will be no messages. */
const useDisconnect = (socket) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        // Checks if socket exists in order to prevent a runtime error.
        if(socket){
            socket.on("disconnect",()=>{
                dispatch(clearMessages());
            })    
        }
    },[socket,dispatch])
}

export default useDisconnect;