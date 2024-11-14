import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-[#0e0f0e]">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}