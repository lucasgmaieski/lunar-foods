import {  Route, Routes } from "react-router-dom"
import { HomeScreen } from "./pages/HomeScreen"

function App() {
    return (
        <div className="w-full min-h-screen dark:bg-gradient-to-b dark:from-themecolor/100 dark:from-0% dark:to-black dark:to-55%  bg-gradient-to-b from-themecolor/50 from-0% to-white to-55% dark:text-white text-black">
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/produtos" element={<></>} />
                <Route path="/produtos/:productId" element={<></>} />
                <Route path="/carrinho" element={<></>} />
                <Route path="/pagamento" element={<></>} />
            </Routes>
        </div>
    )
}

export default App
