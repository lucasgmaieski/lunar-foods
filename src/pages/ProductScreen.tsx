import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ProductType } from "../types/ProductType";
import { products as productList } from "../data/products";
import { FaCartShopping } from "react-icons/fa6";
import { useMainContext } from "../hooks/useContext";
import { MdKeyboardBackspace } from "react-icons/md";

export function ProductScreen() {
    const [product, setProduct] = useState<ProductType>();
    const { addToCart } = useMainContext();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const productData = productList.find(item => item.id.toString() === params.productId);
        setProduct(productData)
    });
    return (
        <main className="flex-1 max-w-3xl w-full mx-auto mt-8 px-3 md:px-0">
            {product &&
                <div className="flex gap-8 flex-col md:flex-row">
                    
                    <img src={product.image} alt={product.name} className="w-full md:w-4/5 rounded-lg"/>
                    <div className="relative">
                        <svg className="absolute top-0 left-0 mb-8 scale-100 opacity-10 z-0" viewBox="0 0 375 283" fill="none" >
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                        </svg>
                        <div className="text-xl font-bold mb-3">{product.name}</div>
                        <div className="mb-3">{product.description}</div>
                        <div>Calorias: {product.calories}</div>
                        <div className="relative flex items-center justify-between mt-5">
                            <span className="bg-white rounded-xl text-jonquil font-bold px-3 py-2 w-fit flex items-center transition-colors">R${product.price}</span>
                            <button type="button" onClick={() => addToCart(product)} className="flex items-center gap-2 bg-jonquil hover:bg-yellow-500 px-3 py-2 rounded-xl dark:text-white text-black group transition-colors">
                                Adicionar 
                                <FaCartShopping className="w-[20px] h-[20px] cursor-pointer dark:text-white text-black group-hover:animate-wiggle"/>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <button className="flex items-center mt-6 group" onClick={() => navigate(-1)}><MdKeyboardBackspace className="text-xl group-hover:-translate-x-1 transition-transform"/>Voltar</button>
        </main>
    )
}