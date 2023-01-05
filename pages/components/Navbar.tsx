import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <div className="text-white pt-8 w-1/2">
                <Link href='/comicPages/Landing' className=" text-4xl cursor-pointer font-inter pl-10 font-bold text-yellow-100">MOICI</Link>   
            </div>
            <div className="">
                <div className="flex gap-5 text-md font-semibold pr-10 pt-10 text-gray-300 font-desc">
                    <Link href='/comicPages/Collection' className="cursor-pointer">COLLECTION OPENING</Link>
                    <Link href='/comicPages/About' className="cursor-pointer">ABOUT</Link>
                    <Link href="/comicPages/Team" className="cursor-pointer">TEAM</Link>
                    <button className=" border border-yellow-100 text-yellow-100 w-24 rounded-md py-1 -mt-2 active:scale-95 transition-all duration-200">APPLY</button>
                </div>
            </div>
        </div>
    )
}