import { useRef, useEffect } from 'react'
import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt';

const ChatPage = () => {
    // const path = useLocation().pathname;
    // const chatId = path.split("/").pop();

    // const { isPending, error, data } = useQuery({
    // queryKey: ["chat", chatId],
    // queryFn: () =>
    //     fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
    //     credentials: "include",
    //     }).then((res) => res.json()),
    // });

    const endRef =useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [])

    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, 
                        recusandae ex quidem exercitationem obcaecati incidunt nam deleniti, perspiciatis aut tempora 
                        repudiandae quasi eum numquam voluptates et quod dolorem commodi adipisci.</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at nam repudiandae hic sint blanditiis harum aliquam </div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, 
                    recusandae ex quidem exercitationem obcaecati incidunt nam deleniti, </div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Lorem ipsum</div>


                    <NewPrompt/>
                    <div ref={endRef}/>

                    {/* {isPending
                        ? "Loading..."
                        : error
                        ? "Something went wrong!"
                        : data?.history?.map((message, i) => (
                            <>
                            {message.img && (
                                <IKImage
                                urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                                path={message.img}
                                height="300"
                                width="400"
                                transformation={[{ height: 300, width: 400 }]}
                                loading="lazy"
                                lqip={{ active: true, quality: 20 }}
                                />
                            )}
                            <div
                                className={
                                message.role === "user" ? "message user" : "message"
                                }
                                key={i}
                            >
                                <Markdown>{message.parts[0].text}</Markdown>
                            </div>
                            </>
                        ))}

                    {data && <NewPrompt data={data}/>} */}
                </div>
            </div>
        </div>
    )
}

export default ChatPage