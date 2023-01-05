

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <div className="text-white relative w-1/2">
                <h1 className=" text-4xl font-inter pt-8 pl-10 font-bold text-yellow-100">MOICI</h1>   
            </div>
            <div className="">
                <div className="flex gap-5 text-md font-semibold pr-10 pt-10 text-gray-300 font-desc">
                    <p className="cursor-pointer">COLLECTION OPENING</p>
                    <p className="cursor-pointer">ABOUT</p>
                    <p className="cursor-pointer">TEAM</p>
                    <button className=" border border-yellow-100 text-yellow-100 w-24 rounded-md py-1 -mt-2 active:scale-95 transition-all duration-200">APPLY</button>
                </div>
            </div>
        </div>
    )
}