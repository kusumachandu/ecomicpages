import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function TeamPage() {
    return (
        <div className="px-[1px] py-[1px]">
        <div className="px-[1px] py-[1px] rounded-lg">
            <motion.div className="bg-black w-[full] md:w-[full] lg:w-[full] h-screen rounded-lg" style={{ backgroundImage: `url('/bgimg5.png')` }}
                initial={{y:-200}}
                animate={{y:0}}
                transition = {{
                    duration: 1
                }}
            >
                <Navbar />
                <div className="text-white px-20 py-14">
                    <h1 className="font-inter text-[30px] md:text-[40px] lg:text-[40px]">WANT TO JOIN OUR TEAM ?</h1>
                    <p className="font-desc text-yellow-100 pb-5">WE'RE LOOKING FOR</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-7 py-2 w-[300px] ">
                        <div className="topslide5">
                            <div className="hovershake topslide8 pb-2">
                                <img className="active:scale-95 w-28 h-28 rounded-full transition-all hover:scale-105 duration-200" src='https://w0.peakpx.com/wallpaper/113/182/HD-wallpaper-avengers-avengers-endgame-captain-america-iron-man-thanos-thor.jpg' />
                            </div>
                            <div className=" w-[105px]">
                                <p className="text-sm font-inter text-center">COLLAB MANAGER</p>
                            </div>
                        </div>
                        <div className="topslide6">
                            <div className="hovershake topslide8 pb-2 ">
                                <img className=" active:scale-95 w-28 h-28 rounded-full text-center transition-all hover:scale-105 duration-200" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLn4NRLX8HwL_N4SIEkG3XBDg6R2wvOUdHnQ&usqp=CAU' />
                            </div>
                            <div className=" w-[105px] ">
                                <p className="text-sm font-inter text-center">RUST DEV</p>
                            </div>
                        </div>
                        <div className="topslide7">
                            <div className="hovershake topslide8 pb-2">
                                <img className=" active:scale-95 w-28 h-28 rounded-full text-center transition-all hover:scale-105 duration-200" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAT_8la76oTYQO-1WBzg4mWMwzTjacMUygA&usqp=CAU' />
                            </div>
                            <div className=" w-[105px]">
                                <p className="text-sm font-inter text-center">WEB3 DEV</p>
                            </div>
                        </div>
                        <div className="topslide8">
                            <div className="hovershake topslide8 pb-2">
                                <img className=" w-28 h-28 rounded-full text-center transition-all hover:scale-105 active:scale-95 duration-200" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGoW2AiO38k2XMxaB474tjyVDSa6Zr_j59A&usqp=CAU' />
                            </div>
                            <div className=" w-[105px]">
                                <p className="text-sm font-inter text-center">DISCORD CHANNEL MODERATOR</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex gap-[2px]">
                        <p className=" font-desc text-yellow-100">FILL IN THE</p> 
                        <p className="hovershake underline cursor-pointer font-desc text-yellow-100 hover:text-yellow-500">FORM</p>.
                        <p className="font-desc text-yellow-100"> IF YOU'RE INTERESTED TO JOIN OUR TEAM.</p>
                    </div>
                </div>
            </motion.div>
        </div>
        </div>
    )
}