import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { products as productList } from "../data/products";
import { ProductType } from "../types/ProductType";

export function HomeScreen() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        setProducts(productList)
    }, []);

    return (
        <>
            <Header />
            <main className="flex-1">
                <div className="max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-6 sm:gap-y-4 p-2 sm:p-0">
                    {products.map((product) => (
                        <Product data={product}/>
                    ))}
                </div>
            </main>
        </>
    )
}