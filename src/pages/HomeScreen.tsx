import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { products as productList } from "../data/products";
import { ProductType } from "../types/ProductType";
import { Search } from "../components/Search";
import { PriceFilter } from "../components/PriceFilter";

export function HomeScreen() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [priceRange, setPriceRange] = useState<string>('');

    useEffect(() => {
        setProducts(productList as ProductType[])
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handlePriceChange = (range: string) => {
        setPriceRange(range);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priceRange === '' || (priceRange === '0-30' && product.price <= 30) ||
        (priceRange === '31-50' && product.price > 30 && product.price <= 50) ||
        (priceRange === '51+' && product.price > 50))
    );

    return (
        <>
            <main className="flex-1 max-w-3xl w-full mx-auto">
                <Search searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
                <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />

                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6  p-2 sm:p-0">
                    {filteredProducts.map((product) => (
                        <Product data={product}/>
                    ))}
                </div>
                {filteredProducts.length === 0 &&
                    <div className="mt-8 text-center">Nenhum produto encontrado para sua busca!</div>
                }
            </main>
        </>
    )
}