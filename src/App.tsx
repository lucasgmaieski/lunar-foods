import {  Route, Routes } from "react-router-dom"
import { HomeScreen } from "./pages/HomeScreen"
import { Footer } from "./components/Footer"
import { ProductScreen } from "./pages/ProductScreen"
import { Header } from "./components/Header"
import { CartPage } from "./pages/CartScreen"

function App() {
    return (
        <div className="w-full min-h-screen flex flex-col dark:bg-gradient-to-b dark:from-themecolor/100 dark:from-0% dark:to-black dark:to-55% bg-gradient-to-b from-themecolor/50 from-0% to-white to-55% dark:text-white text-black">
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/produtos" element={<></>} />
                <Route path="/produtos/:productId" element={<ProductScreen/>} />
                <Route path="/carrinho" element={<CartPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
