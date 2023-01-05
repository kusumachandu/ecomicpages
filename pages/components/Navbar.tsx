

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <div className="text-white pt-8 w-1/2">
                <a href='http://localhost:3000/comicPages/Landing' className=" text-4xl cursor-pointer font-inter pl-10 font-bold text-yellow-100">MOICI</a>   
            </div>
            <div className="">
                <div className="flex gap-5 text-md font-semibold pr-10 pt-10 text-gray-300 font-desc">
                    <a href='http://localhost:3000/comicPages/Collection' className="cursor-pointer">COLLECTION OPENING</a>
                    <a href='http://localhost:3000/comicPages/About' className="cursor-pointer">ABOUT</a>
                    <a href="http://localhost:3000/comicPages/Team" className="cursor-pointer">TEAM</a>
                    <button className=" border border-yellow-100 text-yellow-100 w-24 rounded-md py-1 -mt-2 active:scale-95 transition-all duration-200">APPLY</button>
                </div>
            </div>
        </div>
    )
}