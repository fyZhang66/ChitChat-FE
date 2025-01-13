import { useEffect, useRef, MutableRefObject } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;
const eventHandlerMap = new Map<string, (data: any) => void>();

const useWebSocket = <T>(server: string, event: string, eventHander:(data:T) => void) => {
    // socket object
    const socketRef: MutableRefObject<Socket | null> = useRef(null);

    useEffect(()=>{
        if(!socket){
            socket = io(server);
        }
        socketRef.current = socket;

        // add event handler
        if(!eventHandlerMap.has(event)){
            eventHandlerMap.set(event, eventHander);
            socketRef.current.on(event, eventHander);
        }

        // remove event handler
        return()=>{
            if(eventHandlerMap.has(event)){
                socketRef.current?.off(event, eventHandlerMap.get(event) as (data: any) => void);
                eventHandlerMap.delete(event);
            }
        }
    },[server, event, eventHander]);

    return socketRef;
}
export default useWebSocket;

