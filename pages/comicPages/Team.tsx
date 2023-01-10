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
                    <motion.h1 className="font-inter text-[30px] md:text-[40px] lg:text-[40px]"
                        initial = {{x:-200}}
                        animate={{x:0}}
                        transition = {{
                            duration : 3
                        }}
                    >
                        WANT TO JOIN OUR TEAM ?
                    </motion.h1>
                    <motion.p className="font-desc text-yellow-100 motion.pb-5"
                        initial = {{x:200}}
                        animate={{x:0}}
                        transition = {{
                            duration : 3
                        }}
                    >
                        WE'RE LOOKING FOR
                    </motion.p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-7 py-2 w-[300px] ">
                        <div className="topslide5">
                            <div className="hovershake topslide8 pb-2">
                                <motion.img className="active:scale-95 w-28 h-28 rounded-full transition-all hover:scale-105 duration-200" src='https://w0.peakpx.com/wallpaper/113/182/HD-wallpaper-avengers-avengers-endgame-captain-america-iron-man-thanos-thor.jpg' 
                                    initial = {{y: -200}}
                                    animate = {{y:0}}
                                    transition = {{
                                        duration : 1
                                    }}
                                />
                            </div>
                            <div className=" w-[105px]">
                                <motion.p className="text-sm font-inter text-center"
                                    initial = {{x: -200}}
                                    animate = {{x:0}}
                                    transition = {{
                                        duration : 3
                                    }}
                                >
                                    COLLAB MANAGER
                                </motion.p>
                            </div>
                        </div>
                        <div className="topslide6">
                            <div className="hovershake topslide8 pb-2 ">
                                <motion.img 

                                    className=" active:scale-95 w-28 h-28 rounded-full text-center transition-all hover:scale-105 duration-200" 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLn4NRLX8HwL_N4SIEkG3XBDg6R2wvOUdHnQ&usqp=CAU' 
                                    initial = {{y: -200}}
                                    animate = {{y:0}}
                                    transition = {{
                                        duration : 1
                                    }}
                                />
                            </div>
                            <div className=" w-[105px] ">
                                <motion.p className="text-sm font-inter text-center"
                                    initial = {{x: 200}}
                                    animate = {{x:0}}
                                    transition = {{
                                        duration : 3
                                    }}
                                >
                                    RUST DEV
                                </motion.p>
                            </div>
                        </div>
                        <div className="topslide7">
                            <div className="hovershake topslide8 pb-2">
                                <motion.img className=" active:scale-95 w-28 h-28 rounded-full text-center transition-all hover:scale-105 duration-200" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAT_8la76oTYQO-1WBzg4mWMwzTjacMUygA&usqp=CAU' 
                                initial = {{y: 200}}
                                animate = {{y:0}}
                                transition = {{
                                    duration : 1
                                }}
                            />
                            </div>
                            <div className=" w-[105px]">
                                <motion.p className="text-sm font-inter text-center"
                                    initial = {{x: -200}}
                                    animate = {{x:0}}
                                    transition = {{
                                        duration : 3
                                    }}
                                >
                                    WEB3 DEV
                                </motion.p>
                            </div>
                        </div>
                        <div className="topslide8">
                            <div className="hovershake topslide8 pb-2">
                                <motion.img 
                                    className=" w-28 h-28 rounded-full text-center transition-all hover:scale-105 active:scale-95 duration-200" 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGoW2AiO38k2XMxaB474tjyVDSa6Zr_j59A&usqp=CAU' 
                                    initial = {{y: 200}}
                                    animate = {{y:0}}
                                    transition = {{
                                        duration : 1
                                    }}
                                />
                            </div>
                            <div className=" w-[105px]">
                                <motion.p className="text-sm font-inter text-center"
                                    initial = {{x: 200}}
                                    animate = {{x:0}}
                                    transition = {{
                                        duration : 3
                                    }}
                                >
                                    DISCORD CHANNEL MODERATOR
                                </motion.p>
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