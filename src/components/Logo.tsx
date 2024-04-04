import Image from "next/image";
import Link from "next/link";

export default function Logo({showText=true,showConstLable=true, isDarkText=false, classNames=''}) {
    return (
        <Link href="/" className={`flex items-center gap-2 ${isDarkText ? 'text-dark' : 'text-light/90'}`}>
            <Image src='/favicon.png' alt="Pokit Code" className="w-8 h-8 object-center object-cover" width={40} height={40}/>
            { showText ? <span className="hidden md:inline-block">Pokit Code</span> : null}
            {showConstLable ? <span className="bg-slate-700 px-2 rounded-full">Construction</span>:null}
        </Link>
    );
}