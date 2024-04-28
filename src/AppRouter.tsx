import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}

export default AppRouter