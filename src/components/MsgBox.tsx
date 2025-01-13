import Message from "./Message";

interface Message {
  text: string;
  createdAt: string;
  senderSocketId: string;
}


interface MsgBoxProps {
  messageHistory: Array<Message> | [];
}

export default function MsgBox({ messageHistory }: MsgBoxProps) {
  return (
    <div className="flex-1 w-[95vw] rounded-lg bg-white p-2  m-6 overflow-y-auto">
      {/* <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-2"> */}
      {messageHistory.map((msg, index) => (
        <Message
          key={index}
          text={msg.text}
          timestamp={msg.createdAt}
        />
      ))}
      {/* </div> */}
    </div>
  );
}
