import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
      <nav className="bg-dark text-light py-5">
        <div className="mx-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-light/90"><Logo showText={false} showConstLable={true}/></Link>
            <p className="font-semibold">Editor Page Preview</p>
            <div className="actions flex gap-3">
                <button className="p-3 rounded-full bg-white/20 hover:bg-white/50"></button>
                <button className="p-3 rounded-full bg-white/20 hover:bg-white/50"></button>
                <button className="p-3 rounded-full bg-white/20 hover:bg-white/50"></button>
            </div>
        </div>
      </nav>
    );
}