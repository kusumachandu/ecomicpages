import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="bg-black h-screen">
            <Navbar />
            <div className="flex gap-5 pt-10 text-center">
                <div className="w-[43%] h-[640px]  text-white">
                    <div className="">
                        <div>
                            <h1 className="font-extrabold text-[44px]">ABOUT OUR PROJECT</h1>
                        </div>
                        <div className="px-16 pt-5 text-yellow-600">
                            <p className="font-thin text-xs ">THIS PROJECT IS MEANT TO BRING THE COMIC UNIVERSE TO NET CARDS, EACH CARD WILL BE UNIQUE IN ITS OWN WAY! WE WILL EXPAND THE UNIVERSE OF OUR COMICS AND THE DECK OF CARDS WILL INCREASE . . .</p>
                        </div>
                        <div className="h-[350px] w-[450px] relative border-red-300 m-auto">
                            <div className=" absolute w-[150px] h-[230px] rounded-lg mt-[13%] ml-[45%] rotate-[13deg]">
                                <img className="w-[100%] h-[100%] rounded-lg transition-all delay-150 hover:scale-105" src="https://i.pinimg.com/474x/f0/ba/ac/f0baac2ce75266bc16992079da60d441.jpg" />
                            </div>
                            <div className="w-[150px] h-[230px] absolute rounded-lg mt-[13.5%] ml-[22%] rotate-[347deg]">
                                <img className="w-[100%] h-[100%] rounded-lg transition-all delay-150 hover:scale-105" src="https://i.pinimg.com/474x/f0/ba/ac/f0baac2ce75266bc16992079da60d441.jpg" />
                            </div>
                            <div className="w-[150px] absolute h-[250px] mt-[10%] ml-[33.5%] rounded-lg m-auto">
                                <img className="w-[100%] h-[100%] rounded-lg transition-all delay-150 duration-400 hover:scale-105" src="https://i.pinimg.com/474x/f0/ba/ac/f0baac2ce75266bc16992079da60d441.jpg" />
                            </div>
                        </div>
                        <div className="flex justify-between w-[400px] m-auto">
                            <button className="border-2 border-white bg-yellow-100 text-gray-700 font-bold w-44 rounded-lg transition-all active:scale-95">PRE-ORDER</button>
                            <button className="border-2 border-yellow-500 text-yellow-500 font-bold w-44 py-2 rounded-lg transition-all active:scale-95">WATCH DECK</button>
                        </div>
                        <div className="flex w-[400px] py-16 m-auto justify-between">
                            <div>
                                <svg className="cursor-pointer active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                            <div>
                                <svg className="cursor-pointer active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <div>
                                <svg className="cursor-pointer active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </div>
                            <div>
                                <svg className="cursor-pointer active:scale-95" viewBox="0 0 24 24" opacity={0.5} width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[55%] h-[640px]  rounded-lg pr-7">
                    <img className="w-[100%] h-[640px] rounded-lg" src="https://i.pinimg.com/474x/59/a0/57/59a057c80e782e17535e23a9d469d4a9.jpg" />
                </div>
            </div>
        </div>
    )
}