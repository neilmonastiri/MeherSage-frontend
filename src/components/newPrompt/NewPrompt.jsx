import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Markdown from "react-markdown";

const NewPrompt = ({ data }) => {

    const endRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
        <div className="endChat" ref={endRef}></div>
        
        
        <form className="newForm" ref={formRef}>
            <input type="text" name="text" placeholder="Ask me anything..." />
            <button>
            <img src="/arrow.png" alt="" />
            </button>
        </form>
        </>
    );
};

export default NewPrompt;
