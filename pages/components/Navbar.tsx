

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <div className="text-white relative w-1/2">
                <h1 className=" text-2xl font-serif pt-8 pl-10 font-bold text-yellow-500">MOICI</h1>   
            </div>
            <div className="">
                <div className="flex gap-5 text-sm font-semibold pr-10 pt-10 text-gray-300">
                    <p className="cursor-pointer">COLLECTION OPENING</p>
                    <p className="cursor-pointer">ABOUT</p>
                    <p className="cursor-pointer">TEAM</p>
                    <button className=" border border-yellow-500 text-yellow-500 w-24 rounded-md py-1 -mt-1 active:scale-95 transition-all duration-200">APPLY</button>
                </div>
            </div>
        </div>
    )
}