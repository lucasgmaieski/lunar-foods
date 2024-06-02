import { ProductType } from "../types/ProductType";

export function Product({data}: {data: ProductType}) {
    return (
        <div className="flex-shrink-0 mx-auto  md:m-6 relative overflow-hidden dark:bg-secondarydark bg-secondarylight rounded-lg max-w-xs shadow-lg hover:shadow-2xl transition-shadow group ">
            <svg className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10" viewBox="0 0 375 283" fill="none" >
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>
            <div className="relative flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2}}></div>
                <img className="relative w-full group-hover:scale-105 transition-transform" src={data.image} alt=""/>
            </div>
            <div className="relative flex justify-between text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{data.name}</span>
                <div className="flex justify-between">
                {/* <span className="block font-semibold text-xl">{data.description}</span> */}
                    <span className="bg-white rounded-full text-jonquil text-xs font-bold px-3 py-2 leading-none flex items-center">R${data.price}</span>
                </div>
            </div>
        </div>
    )
}