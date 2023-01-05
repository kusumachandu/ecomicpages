import Navbar from "../components/Navbar";
import Link from "next/link";

export default function CollectionPage(){
    return (
        <div className="px-[1px] py-[1px]">
        <div className="bg-black h-screen rounded-lg" style={{backgroundImage : `url('https://images.hdqwalls.com/wallpapers/marvel-vs-dc-4k-iu.jpg')`}}>;
            <div className="mt-[-20px]">
            <Navbar />
            </div>
            <div className="text-white">
                <div className="font-inter">
                    <p className="text-[90px] text-center">NFT COMIC</p>
                </div>
                <div className="w-[62%] -mt-9">
                    <p className="text-end font-desc text-gray-300">VERY SOON!</p>
                </div>
            </div>
            <div className="flex gap-10 pl-20 pt-10">
                <div className="w-[200px] h-[250px] mt-12 active:scale-95 hover:scale-105 transition-all duration-200  rounded-lg">
                    <img className="w-[100%] h-[100%] cursor-pointer rounded-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbp5i8SlYG2HnW7WvLPJnYEU6wJ--Ryao5TBY8YhbbkKQ0kwQD0BodNj9F3xYX7U3oSU&usqp=CAU" />
                </div>
                <div className="w-[225px] h-[275px] mt-[24px] active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg">
                    <img className="w-[100%] h-[100%] cursor-pointer rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5gA3iCOVu32GnGf-QoBEGeM51-ymRzgy7Bi9AZL5znEtDVr5OHL1G-VnKN3sl5UO4hg&usqp=CAU" />
                </div>
                <div className="w-[250px] h-[300px] active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg">
                    <img className="w-[100%] h-[100%] cursor-pointer rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxs66Wq9CjDxuj50PsKOZ3fIwOLLjyuTmTA&usqp=CAU" />
                </div>
                <div className="w-[225px] h-[275px] mt-[24px] active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg">
                    <img className="w-[100%] h-[100%] cursor-pointer rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVUO8r3DoN7GGZ6O39cylzYMVqtaGObOpjA&usqp=CAU" />
                </div>
                <div className="w-[200px] h-[250px] mt-12 active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg">
                    <img className="w-[100%] h-[100%] cursor-pointer rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXZwaBfGvTCztdCE6mUCkoJdMiVfmKTh8DQ&usqp=CAU" />
                </div>
            </div>
            <div className="text-center font-desc text-yellow-200 pt-10">
                <p>THE FIRST MOICI COLLECTION IS COMING SOON!</p>
            </div>
            <div className="text-center font-desc text-yellow-200 pt-5 w-[40%] m-auto">
                <p>THE COLLECTION BEGINS ITS SALE ON DECEMBER 31, 2022, CREATED BY THE ONFLOW DESIGN TEAM. FOLLOW THE NEWS AND WE WILL TELL YOU ALL THE DETAILS BEFORE THE START OF SALES.</p>
            </div>
            <div className="flex gap-2 pt-10">
                <p className="font-inter text-white text-3xl text-center ml-[45%]">31.12</p><p className="font-desc text-white text-xs mt-4">COLLECTION OPENING</p>
            </div>
        </div>
        </div>
    )
}