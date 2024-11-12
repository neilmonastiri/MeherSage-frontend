import { Link } from "react-router-dom";
import "./chatList.css";
// import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ["userChats"],
    //     queryFn: () =>
    //     fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
    //         credentials: "include",
    //     }).then((res) => res.json()),
    // });

    return (
        <div className="chatList">
            <Link to="/dashboard" className="create_new_chat">Create a new Chat</Link>
            <hr />
            <span className="title">RECENT CHATS</span>
            <div className="list">
                <Link to="/dashboard/chats/1">Lorem ipsum</Link>
                <Link to="/dashboard/chats/2">Lorem ipsum</Link>
                <Link to="/dashboard/chats/3">Lorem ipsum</Link>
                <Link to="/dashboard/chats/4">Lorem ipsum</Link>
                <Link to="/dashboard/chats/5">Lorem ipsum</Link>
                <Link to="/dashboard/chats/6">Lorem ipsum</Link>
            </div>

            {/* <div className="list">
                {isPending
                ? "Loading..."
                : error
                ? "Something went wrong!"
                : data?.map((chat) => (
                    <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                        {chat.title}
                    </Link>
                    ))}
            </div> */}
            <hr />
            <div className="copyrights">
                <img src="/logo.svg" alt="" />
                <div className="texts">
                <span>All rights reserved</span>
                <span>© Copyright 2024 MeherSage</span>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
