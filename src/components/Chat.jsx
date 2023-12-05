import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const Chat = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://candidate.yewubetsalone.com/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Message sent:', data);
                setMessage("");
            });
    };

    return (
        <div className="mt-6">
            <form onSubmit={handleSubmit}
                className="flex gap-3">
                <input type="text" value={message} placeholder="your message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 border-2 border-black rounded-md w-[300px]" />
                <button type="submit" disabled={message === ""}
                    className="p-1 px-5 uppercase bg-blue-500 text-white rounded-md hover:opacity-95">
                    <BsFillSendFill />
                </button>
            </form>
        </div>
    )
}

export default Chat