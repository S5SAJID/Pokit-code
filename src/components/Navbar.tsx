import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Icons from "@/utils/icons";

export default function Navbar() {
  function showPreview(): void {
    document.querySelector('.preview')?.classList.toggle('show-preview');
    document.querySelector('.preview')?.classList.toggle('hidden');
    document.querySelector('.cross-icon')?.classList.toggle('hidden');
    document.querySelector('.play-icon')?.classList.toggle('hidden');
  }

    return (
      <nav className="bg-dark text-light-400 py-5">
        <div className="mx-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-light-400/90"><Logo showText={false} showConstLable={false}/></Link>
            <p className="font-semibold text-light-600">Editor Page Preview</p>
            <div className="actions flex gap-3">
                <button className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/50 md:hidden" onClick={showPreview}>
                  <Icons.playIcon classname="play-icon" />
                  <span className="hidden cross-icon">×</span>
                </button>
            </div>
        </div>
      </nav>
    );
}