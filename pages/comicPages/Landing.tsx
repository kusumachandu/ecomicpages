import Link from "next/link"


export default function Landing() {
    return (
        <div>
            <div className="h-screen border pt-3 border-black flex gap-5 bg-black rounded-md">
                <div className="w-[58%] text-white relative">
                    <a href="" className="absolute cursor-pointer text-4xl font-inter pt-8 pl-10 font-bold text-yellow-500">MOICI</a>
                    <img className="w-[100%] pb-5 min-h-screen" src="https://cdn.dribbble.com/userupload/4083252/file/original-5a850202c0b00459951008a2190f2b70.jpg?compress=1&resize=1504x1128&vertical=center" />
                </div>
                <div className="w-[40%]  text-gray-300 font-desc">
                    <div className="flex justify-between text-md font-semibold  pl-36 pr-10 pt-10">
                        <Link href='/comicPages/Collection' className="cursor-pointer">COLLECTION OPENING</Link>
                        <Link href="/comicPages/About" className="cursor-pointer">ABOUT</Link>
                        <Link href="/comicPages/Team" className="cursor-pointer">TEAM</Link>
                        <button className="border border-yellow-100 text-yellow-100 w-24 rounded-md py-1 -mt-2 active:scale-95 transition-all ">APPLY</button>
                    </div>
                    <div className="py-8 pl-2">
                        <h1 className="font-bold text-[64px] font-inter">HISTORY OF CREATION</h1>
                    </div>
                    <div className="pl-2 pb-8 text-yellow-100">
                        <p className="font-desc text-[18px] font-thin">WE WOULD LIKE TO TELL THE BLACKSTORY</p>
                    </div>
                    <div className="pl-2 w-[420px] text-yellow-100">
                        <p className="text-[18px] font-extralight font-desc">OUR TEAM IS MASTERING TECHNOLOGIES FOR NET UNIVERSES. AND WE DECIDED TO TRY TO OPEN NEW HORIZONS AND INTRODUCE NET INTO THE COMIC UNIVERSE! WE LOVE COMICS VERY MUCH AND WANTED TO PUT OUR SOUL INTO THIS PROJECT</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10  text-white pl-2 pt-8">
                        <div className=" h-[150px] rounded-lg shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/564x/d6/68/83/d668839b939f18db97ebb350cba1be57.jpg" />
                        </div>
                        <div className="h-[150px] rounded-lg shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/16/02/b7/1602b76777919a1b684ad00674745399.jpg" />
                        </div>
                        <div className="rounded-lg h-[150px] shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/a4/fa/31/a4fa310a105f1f5a2c990e4412c56e9f.jpg" />
                        </div>
                        <div className="rounded-lg h-[150px] shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/ae/6a/51/ae6a51155a593e664596fdd362d065e6.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}