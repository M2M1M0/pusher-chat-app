import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const pusher = new Pusher(
            import.meta.env.VITE_PUSHER_KEY, 
            { cluster: import.meta.env.VITE_PUSHER_CLUSTER });

        const channel = pusher.subscribe('my-channel');
        channel.bind("my-event", (data) => {
            // Method to be dispatched on trigger.
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind('my-event');
            pusher.disconnect();
        };
    }, []);

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold text-white bg-gradient-to-l from-gray-500 to-black p-5 text-center rounded-md'>
                Pusher chat App
            </h2>
            <ul className='flex flex-col gap-2 justify-end border-2 border-black rounded-md px-5 p-3 min-h-[200px]  [&>*:nth-child(odd)]:bg-gray-500 [&>*:nth-child(even)]:bg-blue-500 [&>*:nth-child(odd)]:rounded-t-2xl [&>*:nth-child(odd)]:rounded-l-xl [&>*:nth-child(even)]:rounded-t-2xl [&>*:nth-child(even)]:rounded-r-xl'>
                {messages.map((message) => (
                    <li key={message}
                        className='hover:opacity-95 cursor-default flex odd:self-end w-fit px-5 p-1 text-white first-letter:capitalize'
                    >
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;