import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import './routLayout.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const RoutLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className="rootLayout">
                <header>
                    <Link to="/" className='logo'>
                        <img src='/logo.svg' alt='' />
                        <span>MeherSage</span>
                    </Link>
                    <div className="user">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    )
}

export default RoutLayout