
import Message from "./Message";
const messages = [
    {
      sender: 'James Wilson',
      text: "Has anyone reviewed the latest project proposal? I'd love to get your thoughts on the implementation timeline.",
      timestamp: '10:23 AM',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      sender: 'Sarah Parker',
      text: 'I’ve gone through it. The timeline looks ambitious but achievable. We should discuss the resource allocation in our next meeting.',
      timestamp: '10:25 AM',
      isUser: true,
    },
    {
      sender: 'David Chen',
      text: "I agree with Sarah. Also, I've identified some potential risks we should address in the planning phase.",
      timestamp: '10:27 AM',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      sender: 'Emily Thompson',
      text: 'Could you share those risk points in our shared document? It would be helpful to track them throughout the project.',
      timestamp: '10:30 AM',
      avatar: 'https://via.placeholder.com/40',
    },
  ];
export default function MsgBox(){
    return (
        <div className="flex-1 w-[95vw] rounded-lg bg-white p-2  m-6 overflow-y-auto">
          {/* <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-2"> */}
            {messages.map((msg, index) => (
              <Message
                key={index}
                sender={msg.sender}
                text={msg.text}
                timestamp={msg.timestamp}
                isUser={msg.isUser}
                avatar={msg.avatar}
              />
            ))}
          {/* </div> */}
        </div>
      );
}