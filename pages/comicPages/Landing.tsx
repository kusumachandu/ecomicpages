

export default function Landing() {
    return (
        <div>
            <div className="h-screen border pt-3 border-black flex gap-5 bg-black rounded-md">
                <div className="w-[58%] text-white relative">
                    <h1 className="absolute text-2xl font-serif pt-10 pl-10 font-bold text-yellow-500">MOICI</h1>
                    <img className="w-[100%] pb-5 min-h-screen" src="https://cdn.dribbble.com/userupload/4083252/file/original-5a850202c0b00459951008a2190f2b70.jpg?compress=1&resize=1504x1128&vertical=center" />
                </div>
                <div className="w-[40%]  text-gray-300">
                    <div className="flex justify-between text-sm font-semibold  pl-36 pr-10 pt-10">
                        <p className="cursor-pointer">COLLECTION OPENING</p>
                        <p className="cursor-pointer">ABOUT</p>
                        <p className="cursor-pointer">TEAM</p>
                        <button className="border border-yellow-500 text-yellow-500 w-24 rounded-md py-1 -mt-1 active:scale-95 transition-all delay-200">APPLY</button>
                    </div>
                    <div className="py-8 pl-2">
                        <h1 className="font-bold text-[38px] font-serif">HISTORY OF CREATION</h1>
                    </div>
                    <div className="pl-2 pb-8 text-yellow-500">
                        <p className="text-xs font-thin">WE WOULD LIKE TO TELL THE BLACKSTORY</p>
                    </div>
                    <div className="pl-2 w-[450px] text-yellow-500">
                        <p className="text-xs font-thin">OUR TEAM I AMSTERING TECHNOLOGIES FOR NET UNIVERSES. AND WE DECIDED TO TRY TO OPEN NEW HORIZONS AND INTRODUCE NET INTO THE COMIC UNIVERSE! WE LOVE COMICS VERY MUCH AND WANTED TO PUT OUR SOUL INTO THIS PROJECT</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-12  text-white pl-2 pt-8">
                        <div className=" h-[200px] rounded-lg shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/564x/d6/68/83/d668839b939f18db97ebb350cba1be57.jpg" />
                        </div>
                        <div className="h-[200px] rounded-lg shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/16/02/b7/1602b76777919a1b684ad00674745399.jpg" />
                        </div>
                        <div className="rounded-lg h-[200px] shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/a4/fa/31/a4fa310a105f1f5a2c990e4412c56e9f.jpg" />
                        </div>
                        <div className="rounded-lg h-[200px] shadow-lg">
                            <img className="w-[100%] h-[100%] rounded-lg cursor-pointer hover:scale-105 transition-all duration-500" src="https://i.pinimg.com/474x/ae/6a/51/ae6a51155a593e664596fdd362d065e6.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}