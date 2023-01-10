import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {

    const [open, setOpen] = useState(false);

    return (
        <div className="bg-black">
            <Navbar />
            <div className="pt-3 text-center">
                <div className="w-full  text-white md:flex lg:flex ">
                    <div className="w-[100%] h-[400px] md:h-[700px] lg:h-[700px]  rounded-lg pr-7">
                        <motion.img 
                            key={'/bgimg3.png'}
                            src="/bgimg3.png"
                            className="w-[100%] h-[400px] md:h-[700px] lg:h-[700px] rounded-lg"
                            initial = {{x:-200}}
                            animate = {{x:0}}
                            transition = {{
                                duration: 2
                            }}
                        />
                    </div>
                    <div className="">
                        <motion.div
                            initial = {{x: 200}}
                            animate = {{x:0}}
                            transition = {{
                                duration: 2
                            }}
                        >
                            <h1 className="font-extrabold text-[50px] pt-10 font-inter">ABOUT OUR PROJECT</h1>
                        </motion.div>
                        <motion.div className="pt-5 text-yellow-100 w-[65%] m-auto"
                            initial = {{x: 200}}
                            animate = {{x:0}}
                            transition = {{
                                duration: 2
                            }}
                        >
                            <p className="font-thin text-md font-desc">THIS PROJECT IS MEANT TO BRING THE COMIC UNIVERSE TO NET CARDS, EACH CARD WILL BE UNIQUE IN ITS OWN WAY! WE WILL EXPAND THE UNIVERSE OF OUR COMICS AND THE DECK OF CARDS WILL INCREASE . . .</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                x: 0, opacity: 1, scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 280, 280, 0],
                                borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                            }}
                            transition={{
                                delay: 0.5,
                                 duration: 3,
                                default: { ease: "linear" }
                            }}
                        >
                        <div className="flex border-red-300 m-auto py-10 lg:py-16 ">
                            <div className="w-30 h-40 mt-7 rotate-[-15deg]  -mr-56  rounded-lg ml-32  lg:ml-44 hover:z-20">
                                <motion.img
                                    className="w-[100%] h-[100%] rounded-lg transition-all delay-150 hover:scale-105"
                                    key={'https://i.pinimg.com/474x/a4/c5/5f/a4c55f4ee3f62a1128077fe27a2d8a43.jpg'}
                                    src={'https://i.pinimg.com/474x/a4/c5/5f/a4c55f4ee3f62a1128077fe27a2d8a43.jpg'}
                                    whileHover={{ scaleX: 2, scaleY: 2, rotate: 15, opacity: 1, x: 60, y: 6 }}
                                />
                                {/* <img className="w-[100%] h-[100%] rounded-lg transition-all delay-150 hover:scale-105" src="https://i.pinimg.com/474x/f0/ba/ac/f0baac2ce75266bc16992079da60d441.jpg" /> */}
                            </div>
                            <div className="w-32 h-44 mt-3 ml-44 rounded-lg z-10">
                                <motion.img
                                    className="w-[100%] h-[100%] rounded-lg transition-all delay-150 hover:scale-105"
                                    key={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JCtVOsyQ3Cfs3cVJs0pjpQZ1tfqrg1Nrcg&usqp=CAU'}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JCtVOsyQ3Cfs3cVJs0pjpQZ1tfqrg1Nrcg&usqp=CAU'
                                    whileHover={{ scaleX: 1.8, scaleY: 1.8, rotate: 0, opacity: 1, x: -3 }}
                                />
                            </div>
                            <div className="w-30 h-40 relative mt-7 -ml-14 rotate-[15deg] hover:z-20  rounded-lg m-auto">
                                <motion.img
                                    key={'https://www.teahub.io/photos/full/3-30262_thor-kills-thanos-endgame.jpg'}
                                    src="https://www.teahub.io/photos/full/3-30262_thor-kills-thanos-endgame.jpg"
                                    className="w-[100%] h-[100%] rounded-lg transition-all delay-150 duration-400 hover:scale-105"
                                    whileHover={{ scaleX: 2, scaleY: 2, rotate: -15, opacity: 1, x: -60, y: 6 }}
                                />
                            </div>
                        </div>
                        </motion.div>
                        <div className="flex justify-between w-[50%] m-auto lg:pt-2 md:pt-5 font-desc">
                            <motion.div className="hovershake"
                                initial={{x:-200}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <button className="border-2 w-[100px] border-yellow-200 bg-yellow-200 text-black font-bold text-sm  py-2 rounded-lg transition-all active:scale-95">PRE-ORDER</button>
                            </motion.div>
                            <motion.div className="hovershake"
                                initial={{x:200}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <button className="border-2 w-[100px] border-yellow-200 text-yellow-200 font-desc text-sm font-bold  py-2 rounded-lg transition-all active:scale-95">WATCH DECK</button>
                            </motion.div>
                        </div>
                        <div className="flex m-auto  pt-10 md:pt-20 lg:pt-30 justify-between w-[50%] pb-5">
                            <motion.div className="hovershake"
                                initial={{x:-100}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <svg className="active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </motion.div>
                            <motion.div className="hovershake"
                                initial={{x:-50}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <svg className="active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </motion.div>
                            <motion.div className="hovershake"
                                initial={{x:50}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <svg className="active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </motion.div>
                            <motion.div className="hovershake"
                                initial={{x:100}}
                                animate={{x:0}}
                                transition={{
                                    duration: 2
                                }}
                            >
                                <svg className="active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}