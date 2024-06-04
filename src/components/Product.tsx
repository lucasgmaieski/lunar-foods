import { Link } from "react-router-dom";
import { ProductType } from "../types/ProductType";
import { FaCartShopping } from "react-icons/fa6";
import { useMainContext } from "../hooks/useContext";

export function Product({data}: {data: ProductType}) {
    const { addToCart } = useMainContext();


    return (
        <div className="flex-shrink-0 mx-auto relative overflow-hidden dark:bg-secondarydark bg-secondarylight rounded-lg max-w-xs shadow-lg hover:shadow-2xl transition-shadow group ">
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10" viewBox="0 0 375 283" fill="none" >
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>
            <div className="relative flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2}}></div>
                <Link to={`/produtos/${data.id}`} className="w-full"><img className="relative w-full aspec-[3/2] group-hover:scale-105 transition-transform" src={data.image} alt=""/></Link>
            </div>
            <div className="relative flex flex-col dark:text-white text-black px-6 pb-4 mt-4">
                <span className="block opacity-75 ">{data.name}</span>
                <div className="flex justify-between items-center mt-3">
                    <button type="button" onClick={() => addToCart(data)} className="flex items-center gap-2 bg-jonquil hover:bg-yellow-500 px-3 py-2 rounded-xl dark:text-white text-black group transition-colors">
                        Adicionar 
                        <FaCartShopping className="w-[20px] h-[20px] cursor-pointer dark:text-white text-black group-hover:animate-wiggle"/>
                    </button>
                    <span className="bg-white rounded-xl text-jonquil font-bold px-3 py-2 flex items-center">R${data.price}</span>
                </div>
            </div>
        </div>
    )
}