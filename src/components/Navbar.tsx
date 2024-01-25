import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
      <nav className="bg-dark text-light py-5">
        <div className="mx-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-light/90"><Logo showText={false} showConstLable={false}/></Link>
            <p className="font-semibold">Simple Project</p>
            <div className="actions flex gap-3">
                <div className="p-3 rounded-full bg-light"></div>
                <div className="p-3 rounded-full bg-light"></div>
                <div className="p-3 rounded-full bg-light"></div>
            </div>
        </div>
      </nav>
    );
}