type Props = {
    priceRange: string;
    onPriceChange: (priceRange: string) => void;
}

export function PriceFilter({ priceRange, onPriceChange }: Props) {
    const handlePriceChange = (range: string) => {
        onPriceChange(range === priceRange ? '': range);
    };

    return (
        <div className="my-4 mx-3 md:mx-0">
            <h2 className="text-md font-semibold mb-2">Filtrar por Faixa de Preço:</h2>
            <div className="flex">
                <button
                    className={`text-sm sm:text-md mr-2 px-4 py-2 border rounded ${priceRange === '0-30' ? 'bg-white hover:bg-slate-50 text-black' : 'dark:bg-secondarydark bg-secondarylight hover:dark:bg-tertiarydark hover:bg-tertiarylight transition-colors'}`}
                    onClick={() => handlePriceChange('0-30')}
                >
                    R$0 - R$30
                </button>
                <button
                    className={`text-sm sm:text-md mr-2 px-4 py-2 border rounded ${priceRange === '31-50' ? 'bg-white hover:bg-slate-50 text-black' : 'dark:bg-secondarydark bg-secondarylight hover:dark:bg-tertiarydark hover:bg-tertiarylight transition-colors'}`}
                    onClick={() => handlePriceChange('31-50')}
                >
                    R$31 - R$50
                </button>
                <button
                    className={`text-sm sm:text-md px-4 py-2 border rounded ${priceRange === '51+' ? 'bg-white hover:bg-slate-50 text-black' : 'dark:bg-secondarydark bg-secondarylight hover:dark:bg-tertiarydark hover:bg-tertiarylight transition-colors'}`}
                    onClick={() => handlePriceChange('51+')}
                >
                    R$51+
                </button>
            </div>
        </div>
    )
}