import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function CollectionPage() {
    return (
        <div className="">
            <div className="bg-black h-screen rounded-lg" style={{ backgroundImage: `url('/bgimg1.png')` }}>;
                <div className="-mt-4">
                    <Navbar />
                </div>
                <div className="text-white">
                    <motion.div className="font-inter"
                        initial={{y:-200}}
                        animate={{y:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        <p className="text-[60px] md:text-[75px] lg:text-[90px] text-center">NFT COMIC</p>
                    </motion.div>
                    <motion.div className="w-[70%] md:w-[65%] lg:w-[61%] -mt-6 lg:-mt-9 "
                        initial={{x:-200}}
                        animate={{x:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        <p className="text-end font-desc text-gray-300">VERY SOON!</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 2 },
                        default: { ease: "linear" }
                    }}
                >
                    <div className="pt-10 px-5 md:pl-10 lg:pl-20 grid grid-cols-5 gap-x-2 py-10">
                        <div className="hovershake topslide1 w-20 md:w-40 lg:w-48 h-[115px] md:h-[195px] lg:h-[220px] mt-8   rounded-lg shadow-xl ">
                            <motion.img
                                
                                whileTap = {{ scale : 0.8 }}
                                className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl"
                                key="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbp5i8SlYG2HnW7WvLPJnYEU6wJ--Ryao5TBY8YhbbkKQ0kwQD0BodNj9F3xYX7U3oSU&usqp=CAU"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbp5i8SlYG2HnW7WvLPJnYEU6wJ--Ryao5TBY8YhbbkKQ0kwQD0BodNj9F3xYX7U3oSU&usqp=CAU"
                                animate={{
                                    x: 0, opacity: 1, scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 280, 280, 0],
                                    borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                                }}
                                transition = {{
                                    duration : 2
                                }}
                            />
                        </div>
                        <div className="hovershake topslide3 w-20 md:w-40 lg:w-48 h-[125px] md:h-[203px] lg:h-[230px] mt-6  rounded-lg shadow-xl">
                            <motion.img
                                className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl"
                                key='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5gA3iCOVu32GnGf-QoBEGeM51-ymRzgy7Bi9AZL5znEtDVr5OHL1G-VnKN3sl5UO4hg&usqp=CAU'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5gA3iCOVu32GnGf-QoBEGeM51-ymRzgy7Bi9AZL5znEtDVr5OHL1G-VnKN3sl5UO4hg&usqp=CAU'
                                animate={{
                                    x: 0, opacity: 1, scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 280, 280, 0],
                                    borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                                }}
                                transition = {{
                                    duration : 2
                                }}
                            />
                        </div>
                        <div className="hovershake topslide5 w-20 md:w-40 lg:w-48 h-[150px] md:h-[228px] lg:h-[255px] rounded-lg shadow-xl">
                            <motion.img
                                className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl"
                                key={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxs66Wq9CjDxuj50PsKOZ3fIwOLLjyuTmTA&usqp=CAU'}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxs66Wq9CjDxuj50PsKOZ3fIwOLLjyuTmTA&usqp=CAU'
                                animate={{
                                    x: 0, opacity: 1, scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 280, 280, 0],
                                    borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                                }}
                                transition = {{
                                    duration : 2
                                }}

                            />
                        </div>
                        <div className="hovershake topslide7 w-20 md:w-40 lg:w-48 h-[125px] md:h-[203px] lg:h-[230px] mt-6  rounded-lg shadow-xl">
                            <motion.img
                                className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl"
                                key={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVUO8r3DoN7GGZ6O39cylzYMVqtaGObOpjA&usqp=CAU'}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVUO8r3DoN7GGZ6O39cylzYMVqtaGObOpjA&usqp=CAU'
                                animate={{
                                    x: 0, opacity: 1, scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 280, 280, 0],
                                    borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                                }}
                                transition = {{
                                    duration : 2
                                }}
                            />
                        </div>
                        <div className=" hovershake topslide8 w-20 md:w-40 lg:w-48 h-[115px] md:h-[195px] lg:h-[220px] mt-8  rounded-lg shadow-xl">
                            <motion.img
                                className="w-[100%] h-[100%] cursor-pointer active:scale-95 hover:scale-105 transition-all duration-200 rounded-lg shadow-xl"
                                key={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXZwaBfGvTCztdCE6mUCkoJdMiVfmKTh8DQ&usqp=CAU'}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXZwaBfGvTCztdCE6mUCkoJdMiVfmKTh8DQ&usqp=CAU'
                                animate={{
                                    x: 0, opacity: 1, scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 280, 280, 0],
                                    borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                                }}
                                transition = {{
                                    duration : 2
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div className="text-center font-desc text-yellow-200 pt-10"
                    initial={{x:-200}}
                    animate={{x:0}}
                    transition = {{
                        duration : 2
                    }}
                >
                    <p>THE FIRST MOICI COLLECTION IS COMING SOON!</p>
                </motion.div>
                <motion.div className="text-center font-desc text-yellow-200 pt-5 w-[50%] lg:w-[31%] md:w-[44%] m-auto"
                    initial={{x:200}}
                    animate={{x:0}}
                    transition = {{
                        duration : 2
                    }}
                >
                    <p>THE COLLECTION BEGINS ITS SALE ON DECEMBER 31, 2022, CREATED BY THE ONFLOW DESIGN TEAM. FOLLOW THE NEWS AND WE WILL TELL YOU ALL THE DETAILS BEFORE THE START OF SALES.</p>
                </motion.div>
                <motion.div className="flex gap-2 pt-10">
                    <motion.p className="font-inter text-white text-3xl text-center ml-[36%] lg:ml-[45%] md:ml-[45%]"
                        initial={{x:-200}}
                        animate={{x:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        31.12
                    </motion.p>
                    <motion.p className="font-desc text-white text-xs mt-4"
                        initial={{x:200}}
                        animate={{x:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        COLLECTION OPENING
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}