import Navbar from "../components/Navbar";
import Link from "next/link";

export default function CollectionPage(){
    return (
        <div className="">
        <div className="bg-black h-screen rounded-lg" style={{backgroundImage : `url('/bgimg1.png')`}}>;
            <div className="-mt-4">
                <Navbar />
            </div>
            <div className="text-white">
                <div className="font-inter">
                    <p className="text-[60px] md:text-[75px] lg:text-[90px] text-center">NFT COMIC</p>
                </div>
                <div className="w-[70%] md:w-[65%] lg:w-[61%] -mt-6 lg:-mt-9 ">
                    <p className="text-end font-desc text-gray-300">VERY SOON!</p>
                </div>
            </div>
            <div className="pt-10 px-5 md:pl-10 lg:pl-20 grid grid-cols-5 gap-x-2 py-10">
                <div className="hovershake topslide1 w-20 md:w-40 lg:w-48 h-[115px] md:h-[195px] lg:h-[220px] mt-8  rounded-lg shadow-xl ">
                    <img className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbp5i8SlYG2HnW7WvLPJnYEU6wJ--Ryao5TBY8YhbbkKQ0kwQD0BodNj9F3xYX7U3oSU&usqp=CAU" />
                </div>
                <div className="hovershake topslide3 w-20 md:w-40 lg:w-48 h-[125px] md:h-[203px] lg:h-[230px] mt-6  rounded-lg shadow-xl">
                    <img className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5gA3iCOVu32GnGf-QoBEGeM51-ymRzgy7Bi9AZL5znEtDVr5OHL1G-VnKN3sl5UO4hg&usqp=CAU" />
                </div>
                <div className="hovershake topslide5 w-20 md:w-40 lg:w-48 h-[150px] md:h-[228px] lg:h-[255px] rounded-lg shadow-xl">
                    <img className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxs66Wq9CjDxuj50PsKOZ3fIwOLLjyuTmTA&usqp=CAU" />
                </div>
                <div className="hovershake topslide7 w-20 md:w-40 lg:w-48 h-[125px] md:h-[203px] lg:h-[230px] mt-6  rounded-lg shadow-xl">
                    <img className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVUO8r3DoN7GGZ6O39cylzYMVqtaGObOpjA&usqp=CAU" />
                </div>
                <div className=" hovershake topslide8 w-20 md:w-40 lg:w-48 h-[115px] md:h-[195px] lg:h-[220px] mt-8  rounded-lg shadow-xl">
                    <img className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXZwaBfGvTCztdCE6mUCkoJdMiVfmKTh8DQ&usqp=CAU" />
                </div>
            </div>
            <div className="text-center font-desc text-yellow-200 pt-10">
                <p>THE FIRST MOICI COLLECTION IS COMING SOON!</p>
            </div>
            <div className="text-center font-desc text-yellow-200 pt-5 w-[50%] lg:w-[31%] m-auto">
                <p>THE COLLECTION BEGINS ITS SALE ON DECEMBER 31, 2022, CREATED BY THE ONFLOW DESIGN TEAM. FOLLOW THE NEWS AND WE WILL TELL YOU ALL THE DETAILS BEFORE THE START OF SALES.</p>
            </div>
            <div className="flex gap-2 pt-10">
                <p className="font-inter text-white text-3xl text-center ml-[36%] lg:ml-[45%]">31.12</p><p className="font-desc text-white text-xs mt-4">COLLECTION OPENING</p>
            </div>
        </div>
        </div>
    )
}