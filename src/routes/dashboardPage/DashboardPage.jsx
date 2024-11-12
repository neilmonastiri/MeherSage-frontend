import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./dashboardPage.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const DashboardPage = () => {
    // const queryClient = useQueryClient();

    // const navigate = useNavigate();

    // const mutation = useMutation({
    //     mutationFn: (text) => {
    //     return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ text }),
    //     }).then((res) => res.json());
    //     },
    //     onSuccess: (id) => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ["userChats"] });
    //     navigate(`/dashboard/chats/${id}`);
    //     },
    // });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const text = e.target.text.value;
    //     if (!text) return;

    //     mutation.mutate(text);
    // };
    return (
        <div className="dashboardPage">
        <div className="texts">
            <div className="logo">
            <h1>MeherSage</h1>
            </div>
            <div className="options">
                <div className="chat">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "What is MeherSage?",
                            2000,
                            "How can I identify potential risks in the planning phase?",
                            2000,
                            "What risks should I prioritize during the initiation phase of a project?",
                            2000,
                            "Suggest risk mitigation strategies for scope creep.",
                            2000,
                            "Recommend risk response strategies for schedule delays.",
                            2000,
                        ]}
                        repeat={Infinity}
                        cursor={true}
                        deletionSpeed={85}
                        typingSpeed={60}
                    />
                </div>


                {/* <div className="option">
                    <img src="/chat.png" alt="" />
                    <span>Create a New Chat</span>
                </div>
                <div className="option">
                    <img src="/image.png" alt="" />
                    <span>Analyze Images</span>
                </div>
                <div className="option">
                    <img src="/code.png" alt="" />
                    <span>Help me with my Code</span>
                </div> */}
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type="text" name="text" placeholder="Ask me anything..." />
            <button>
                <img src="/arrow.png" alt="" />
            </button>
            </form>
        </div>
        </div>
    );
};

export default DashboardPage;
