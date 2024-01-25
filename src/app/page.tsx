import Image from "next/image";
import Link from "next/link";
import ScreenShotImage from '../../public/screenshot.jpeg';
import SideImage from '../../public/Side.png';
import Logo from "@/components/Logo";
import Icons from "@/utils/icons";

export default function Home() {
  return (
    <div className="bg-slate-900 w-full h-lvh overflow-x-hidden px-2 lg:px-0">
      <nav className="text-slate-100 container mx-auto backdrop-blur-md flex justify-between items-center py-5">
        <Logo showText={true}/>
        <div className="actions flex gap-3">
            <button className="btn px-3 py-1 bg-slate-800 border hover:bg-slate-700 border-slate-500 rounded-full text-slate-200"><Link href='/editor'>Get Started</Link></button>
        </div>
      </nav>
      <section className="home-section h-lvh md:h-4/5 flex items-center relative justify-center">
        <div className="center w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl h-3/4 bg-light/5"/>
        
        <div className="container flex items-center flex-col text-center">
          <div className="headline mb-10 border flex items-center gap-3 border-slate-600 rounded-full px-3 py-1 text-slate-100">
            <div className="spot rounded-full p-1 bg-blue-500"></div>
            Introducing Pokit Code
          </div>

          <div className="content relative z-[2]">
            <h1 className="text-6xl text-slate-300 text-center">Light weight & <br className="md:hidden"/> <span className="text-slate-100 font-medium">Fast Editor</span></h1>
            <p className="mt-8 text-xl text-slate-400">Super fast your simple web code</p>

            <Image src={ScreenShotImage} alt="Pokit Code" className="h-96 w-auto mx-auto mt-12 rounded-lg shadow-md" />
          </div>
        </div>
      </section>

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


      <footer className="bg-slate-400 rounded-t-lg md:rounded-none mt-20">
        <div className="container flex-wrap gap-5 mx-auto p-5 flex items-center justify-between">
          <Logo showText={true} showConstLable={false} isDarkText={true}/>
          <p>Created with &hearts; by <a href="http://s5sajid.github.io" className="font-semibold underline underline-offset-2 decoration-2" target="_blank">S5 SAJID</a> & Copyright &copy; {new Date(Date.now()).getUTCFullYear()} Pokit Code</p>
          <p>Contact: <a href="mailto:sk8299148@gmail.com" className="font-semibold underline underline-offset-2 decoration-2">sk8299148@gmail.com</a></p>
        </div>
      </footer>
    </div>
  )
}
 