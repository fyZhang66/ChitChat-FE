export interface MessageProps {
  sender: string;
  text: string;
  timestamp: string;
  isUser?: boolean; // Indicates if the message is from the current user
  avatar?: string; // Avatar URL (optional)
}

export default function Message({
  sender,
  text,
  timestamp,
  isUser,
  avatar,
}: MessageProps) {
  return (
    <div
      className={`flex items-start mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && avatar && (
        <img
          src={avatar}
          alt={`${sender}'s avatar`}
          className="w-10 h-10 rounded-full mr-3"
        />
      )}
      <div className={`max-w-md ${isUser ? "text-right" : "text-left"}`}>
        <div
          className={`${
            isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
          } px-4 py-2 rounded-lg shadow-md`}
        >
          <p className="font-medium mb-1">{sender}</p>
          <p>{text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
      </div>
    </div>
  );
}
