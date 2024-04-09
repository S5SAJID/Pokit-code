import Image from "next/image";
import SideImage from '../../public/images/Side.png';
import Icons from "@/utils/icons";
import HomeNavbar from "@/components/Home/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import Footer from "@/components/Editor/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-950 w-full h-lvh overflow-x-hidden px-2 lg:px-0">
      <HomeNavbar />
      <HeroSection />
      <section className="container mx-auto my-64 px-2 lg:px-0">
        <div className="content flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-start">
          <div className="left-side flex gap-8 flex-col">
            <h1 className="text-4xl text-medium text-slate-300">Good is not good enough.<br/><span className="text-slate-100 font-medium">Make it better!</span></h1>
            <p className="text-xl text-slate-400">With the fast rendering at right side, Pokit code helps to you to save your milli-seconds. Quick and fast!</p>

            <ul className="text-slate-400 text-lg grid gap-2">
              <li className="flex gap-2 items-center"><div className="icon p-2 rounded border border-slate-500"><Icons.plusIcon className="w-4 h-4"/></div> Works Offline</li>
              <li className="flex gap-2 items-center"><div className="icon p-2 rounded border border-slate-500"><Icons.plusIcon className="w-4 h-4"/></div> Works with CSS frameworks</li>
              <li className="flex gap-2 items-center"><div className="icon p-2 rounded border border-slate-500"><Icons.plusIcon className="w-4 h-4"/></div>Auto Suggestions</li>
            </ul>
          </div>
          <div className="w-full flex justify-end">
            <Image className="rounded-xl md:rounded-none" src={SideImage} alt="pokit code"/>
          </div>
        </div>
      </section>

      <section className="lang-features container mx-auto mt-32">
      <h1 className="text-4xl text-medium text-slate-100 text-medium text-center">You know, <br className="md:hidden"/> for what it is</h1>
      <p className="text-slate-400 text-center">hhhh!</p>
      <div className="languages-support flex flex-wrap items-center justify-evenly my-20 gap-10">
        <div className="border border-slate-700 flex flex-col gap-4 rounded p-5 w-52 items-center bg-slate-800">
          <Icons.copyIcon className="w-10 h-10 text-slate-200"/>
          <div>
            <h2 className="text-lg text-slate-200 text-center">HTML</h2>
            <p className="text-slate-400 text-md text-center">Structure for a website</p>
          </div>
        </div>
        <div className="border border-slate-700 flex flex-col gap-4 rounded p-5 w-52 items-center bg-slate-800">
          <Icons.copyIcon className="w-10 h-10 text-slate-200"/>
          <div>
            <h2 className="text-lg text-slate-200 text-center">CSS</h2>
            <p className="text-slate-400 text-md text-center">Styling stuff for a website</p>
          </div>
        </div>
        <div className="border border-slate-700 flex flex-col gap-4 rounded p-5 w-52 items-center bg-slate-800">
          <Icons.copyIcon className="w-10 h-10 text-slate-200"/>
          <div>
            <h2 className="text-lg text-slate-200 text-center">JavaScript</h2>
            <p className="text-slate-400 text-md text-center">Functionality for a website</p>
          </div>
        </div>
      </div>
      </section>


      <Footer />
    </div>
  )
}
 