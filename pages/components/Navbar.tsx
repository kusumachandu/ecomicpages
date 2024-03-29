import { MotionConfig } from "framer-motion"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <div className="flex justify-between">
            <motion.div className="text-white pt-8 w-1/2 hovershake"
                initial={{x:-200}}
                animate={{x:0}}
                transition= {{
                    duration: 2
                }}
            >
                <Link href='/comicPages/Landing' className="text-4xl cursor-pointer font-inter pl-5 lg:pl-20 md:pl-10 font-bold text-yellow-100">MOICI</Link>   
            </motion.div>
            <div className="">
                <motion.div className="flex gap-5 text-xs lg:text-[16px] font-semibold pr-2 lg:pr-20 md:pr-10 pt-10 lg:pt-12 text-gray-300 font-desc"
                    initial={{x: 200}}
                    animate={{x:0}}
                    transition = {
                        {
                            duration: 2
                        }
                    }
                >
                    <Link href='/comicPages/Collection' className="cursor-pointer hovershake w-[73px] lg:w-[110px]">COLLECTION OPENING</Link>
                    <Link href='/comicPages/About' className="cursor-pointer hovershake">ABOUT</Link>
                    <Link href="/comicPages/Team" className="cursor-pointer hovershake">TEAM</Link>
                    <div className="hovershake">
                    <button className="border border-yellow-200 text-yellow-100 w-20 h-8 rounded-md py-1 -mt-2 active:scale-95 transition-all duration-200">APPLY</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}