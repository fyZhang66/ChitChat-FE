import "./App.css";
import Header from "@/components/Header";
import MsgBox from "@/components/MsgBox";
import InputBox from "@/components/InputBox";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  text: string;
  createdAt: string;
  senderSocketId: string;
}

const server = import.meta.env.VITE_HOST


function App() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);

  let socketRef: MutableRefObject<Socket | null> = useRef(null);

  // update message list when received new msg
  const newMessageReceived = (message: Message) => {
    console.log("new message received:", message);
    setMessageHistory((prev) => [...prev!, message]);
  };

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(`${server}/messages`);
      const data = await response.json();
      setMessageHistory(data);
    }
    fetchMessages();

    console.log(messageHistory, ":: MessageHistory")

    socketRef.current = io(server);
    socketRef.current.on("chat-message", newMessageReceived);

    return () => {
      socketRef.current?.off("chat-message", newMessageReceived);
    };
  }, []);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const msg = message;
    setMessage("");
    console.log("send message:" + msg);

    socketRef.current?.emit("chat-message", msg);
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center  bg-gray-100">
      <Header />
      <div className="flex flex-1 flex-col bg-gray-100">
         <MsgBox messageHistory={messageHistory} />
      </div>
      <footer className="h-16 w-full bg-slate-300 flex items-center justify-center">
        <InputBox message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
      </footer>
    </main>
  );
}

export default App;
