type Props = {
    priceRange: string;
    onPriceChange: (priceRange: string) => void;
}

export function PriceFilter({ priceRange, onPriceChange }: Props) {
    const handlePriceChange = (range: string) => {
        onPriceChange(range);
    };

    return (
        <div className="my-4 mx-6">
            <h2 className="text-md font-semibold mb-2">Filtrar por Faixa de Preço:</h2>
            <div className="flex">
                <button
                    className={`mr-2 px-4 py-2 border rounded ${priceRange === '0-30' ? 'bg-white text-black' : 'dark:bg-secondarydark bg-secondarylight'}`}
                    onClick={() => handlePriceChange('0-30')}
                >
                    R$0 - R$30
                </button>
                <button
                    className={`mr-2 px-4 py-2 border rounded ${priceRange === '31-50' ? 'bg-white text-black' : 'dark:bg-secondarydark bg-secondarylight'}`}
                    onClick={() => handlePriceChange('31-50')}
                >
                    R$31 - R$50
                </button>
                <button
                    className={`px-4 py-2 border rounded ${priceRange === '51+' ? 'bg-white text-black' : 'dark:bg-secondarydark bg-secondarylight'}`}
                    onClick={() => handlePriceChange('51+')}
                >
                    R$51+
                </button>
            </div>
        </div>
    )
}