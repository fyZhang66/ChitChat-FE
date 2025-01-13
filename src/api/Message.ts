import { Message } from "@/common/type";

const host = import.meta.env.VITE_HOST;

// fetch messages history
export const fetchMessages = async () => {
    const response = await fetch(`${host}/messages`);
    const data = await response.json();
    return data as Message[];
}
