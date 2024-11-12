import { Outlet, useNavigate} from 'react-router-dom'
import './dashboardLayout.css'
import { useEffect } from "react";
import { useAuth } from '@clerk/clerk-react';
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);

    if (!isLoaded) return (
        <div class="loadingio-spinner-rolling-nq4q5u6dq7r"><div class="ldio-x2uulkbinc">
        <div></div>
        </div></div>
    );

    return (
        <div className='dashboardLayout'>
            <div className='menu'><ChatList/></div>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout