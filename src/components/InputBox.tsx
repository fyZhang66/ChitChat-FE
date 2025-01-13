
interface InputBoxProps {
  message: string;
  setMessage: (value: string) => void;
  handleSendMessage: (e: React.MouseEvent<HTMLButtonElement>) => void; // Updated type
}

export default function InputBox({ message, setMessage, handleSendMessage }: InputBoxProps) {
  return (
    <div className="input-box flex w-screen m-2">
      <input
        type="text"
        className="flex-1 rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage} className="w-[2] ml-2 font-bold">
        Send
      </button>
    </div>
  );
}
