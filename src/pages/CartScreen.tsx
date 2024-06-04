import { ProductType } from "../types/ProductType";
import { useMainContext } from "../hooks/useContext";
import { PaymentForm } from "../components/PaymentForm";
import { FaCartShopping } from "react-icons/fa6";

export function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useMainContext();


    return (
        <main className="flex-1 max-w-3xl w-full mx-auto px-3 lg:px-0">
        <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
        {cartItems.length === 0 ? (
            <div className="text-center mx-auto mt-10">
                <FaCartShopping size={80} className="opacity-30 mx-auto"/>
                <p>Seu carrinho está vazio!</p>
            </div>
        ) : (
            <div>
            {cartItems.map((item: ProductType) => (
                <div key={item.id} className="flex-col xsm:flex-row gap-4 dark:bg-secondarydark bg-secondarylight p-4 rounded mb-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-24 mr-4 aspect-[3/2]" />
                        <div>
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>R${item.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="px-2 py-1 bg-gray-200 rounded text-black"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity === 1}
                        >
                            -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                            className="px-2 py-1 bg-gray-200 rounded text-black"
                            onClick={() => updateQuantity(item.id, 1)}
                        >
                            +
                        </button>
                        <button
                            className="ml-4 text-red-500"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remover
                        </button>
                    </div>
                </div>
            ))}
            
            <PaymentForm />
            </div>
        )}
        </main>
    );
};