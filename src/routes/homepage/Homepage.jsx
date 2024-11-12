import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/ai_graph.png" alt="" className="ai_graph" />
            <div className="left">
                <h1>MeherSage</h1>
                <h2>Uncover Risks, Drive Decisions with AI-Powered Insight.</h2>
                <h3>
                MeherSage uses powerful knowledge graphs to deliver actionable insights, 
                helping organizations anticipate and manage risks with precision and confidence.
                </h3>
                <Link to="/dashboard">Get Started!</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/mascot.png" alt="" className="mascot" />
                </div>
            </div>
        </div>
    )
}
export default Homepage

