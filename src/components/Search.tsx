import { IoSearch } from "react-icons/io5";

type Props = {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Search({ searchTerm, onSearchChange }: Props) {
    return (
     <div className="pt-2 relative mx-6">
        <input className="border-2 dark:border-primarydark border-primarylight dark:bg-secondarydark bg-secondarylight w-full h-10 px-5 pr-16 pl-4 rounded-lg text-sm focus:outline-none dark:text-white text-black dark:placeholder:text-white placeholder:text-black"
          type="text" name="search" value={searchTerm}
          onChange={onSearchChange} placeholder="Buscar produtos..."/>
        <div className="absolute right-0 top-0 mt-5 mr-4">
            <IoSearch className="dark:text-white text-black w-4 h-4"/>
        </div>
      </div>
    )
}