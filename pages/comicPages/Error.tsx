import { url } from "inspector";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
    return (
        <div className="bg-black h-screen" style={{ backgroundImage: `url('https://www.dc.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg')` }}>
            <Navbar />
            <div className="flex justify-between w-[400px] m-auto mt-[650px]">
                <button className="border-2 border-white bg-yellow-100 text-gray-700 font-bold w-44 rounded-lg transition-all active:scale-95">PRE-ORDER</button>
                <button className="border-2 border-yellow-500 text-yellow-500 font-bold w-44 py-2 rounded-lg transition-all active:scale-95">GO BACK</button>
            </div>
        </div>
    )
}