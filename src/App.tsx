import "./App.css";
import Header from "@/components/Header";
import MsgBox from "@/components/MsgBox";
import InputBox from "@/components/InputBox";
import { useEffect, useState } from "react";
import useWebSocket from "./hooks/useWebSocket";
import { fetchMessages } from "./api/Message";
import { Message } from "./common/type";

const server = import.meta.env.VITE_HOST


function App() {
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);


  // update message list when received new msg
  const newMessageReceived = (message: Message) => {
    console.log("new message received:", message);
    setMessageHistory((prev) => [...prev!, message]);
  };

  const socketRef = useWebSocket<Message>(server, "chat-message", newMessageReceived);

  useEffect(() => {
    async function loadMessages() {
      const data = await fetchMessages();
      setMessageHistory(data);
    }
    loadMessages();

    console.log(messageHistory, ":: MessageHistory")
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
