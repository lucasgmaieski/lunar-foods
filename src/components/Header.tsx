import { FiSun } from "react-icons/fi";
import { useMainContext } from "../hooks/useContext";
import { MdDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiOutlineMoon } from "react-icons/hi";

export function Header() {
    const {setTheme, cartItemCount} = useMainContext()
    return (
        <header className="max-w-3xl w-full mx-auto flex justify-between py-5 px-3 md:px-0">
            <Link to={"/"}>
                <h1 className="text-4xl flex items-center"><HiOutlineMoon />Lunar Foods</h1>
            </Link>

            <div className="flex gap-4">
                <Link to="/carrinho" className="relative">
                    <FaCartShopping className="w-[28px] h-[28px] cursor-pointer dark:text-white text-black "/>
                    {cartItemCount > 0 &&
                        <span className={`${cartItemCount > 0 ? 'inline' : 'hidden'} absolute -top-1 -right-2 dark:bg-white bg-black dark:text-black text-white text-center w-4 h-4 text-xs rounded-full`}>{cartItemCount}</span>
                    }
                </Link>
                <FiSun className="w-[28px] h-[28px] cursor-pointer hidden text-white dark:block" onClick={()=>setTheme("dark")} tabIndex={0}/>
                <MdDarkMode className="w-[28px] h-[28px] cursor-pointer block text-black dark:hidden" onClick={()=>setTheme("light")} tabIndex={0}/>
            </div>
        </header>
    );
}