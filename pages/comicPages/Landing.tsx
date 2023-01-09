import Navbar from "../components/Navbar";

export default function Landing(){
    return (
        <div className="bg-black rounded-lg">

            <div>
                <Navbar />
            </div>
            <div className="px-3 rounded-lg lg:flex lg:flex-grow lg:gap-x-5 lg:justify-between">

                <div className=" w-full lg:w-[100%]  h-[325px] lg:h-[725px] md:h-[605px] rounded-lg">
                    <img className="h-[100%] w-[100%] rounded-lg" src="https://cdn.dribbble.com/userupload/4083252/file/original-5a850202c0b00459951008a2190f2b70.jpg?compress=1&resize=1504x1128&vertical=center"/>
                </div>
                <div className=" pt-10 lg:w-[65%]">
                    <div className="text-white text-4xl lg:text-[54px] md:text-[60px]">
                        <h1 className="font-inter text-center lg:text-start">HISTORY OF CREATION</h1>
                    </div>
                    <div className="text-yellow-400 font-desc pt-5 lg:px-2 md:w-[70%] md:m-auto lg:w-[100%]">
                        <p className="text-center lg:text-start">WE WOULD LIKE TO TELL THE BLACKSTORY</p>
                    </div>
                    <div className="text-yellow-400 font-desc py-1 px-[50px] lg:px-2 md:px-0 md:w-[60%] lg:w-[72%] lg:m-0 md:m-auto ">
                        <p className="text-center lg:text-start">OUR TEAM IS MASTERING TECHNOLOGIES FOR NET UNIVERSES. AND WE DECIDED TO TRY TO OPEN NEW HORIZONS AND INTRODUCE NET INTO THE COMIC UNIVERSE! WE LOVE COMICS VERY MUCH AND WANTED TO PUT OUR SOUL INTO THIS PROJECT</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-2 gap-y-10 lg:gap-y-2.5 lg:gap-x-5 w-[75%] lg:w-[100%] m-auto py-10">
                        <div className="w-full h-52 rounded-lg cursor-pointer hovershake ">
                            <img className="w-[100%] h-[100%] rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" src="https://c4.wallpaperflare.com/wallpaper/541/426/525/iron-man-captain-america-fight-marvel-wallpaper-preview.jpg" />
                        </div>
                        <div className="w-full h-52 rounded-lg cursor-pointer hovershake">
                            <img className="w-[100%] h-[100%] rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" src="https://c4.wallpaperflare.com/wallpaper/541/426/525/iron-man-captain-america-fight-marvel-wallpaper-preview.jpg" />
                        </div>
                        <div className="w-full h-52 rounded-lg cursor-pointer hovershake lg:mt-4">
                            <img className="w-[100%] h-[100%] rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" src="https://c4.wallpaperflare.com/wallpaper/541/426/525/iron-man-captain-america-fight-marvel-wallpaper-preview.jpg" />
                        </div>
                        <div className="w-full h-52 rounded-lg cursor-pointer hovershake lg:mt-4">
                            <img className="w-[100%] h-[100%] rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" src="https://images.hdqwalls.com/wallpapers/avengers-endgame-final-ax.jpg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}