import Link from "next/link";
import Logo from "../Logo";

export default function HomeNavbar() {
    return (
        <header className="fixed right-0 left-0 top-0 p-4 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-between border-b-[1px] border-neutral-900">
            <aside className="flex font-space items-center">
                <Logo showConstLable={false} classNames="w-10 h-10" showText={false}/>
                <p className="text-3xl text-light-600 font-bold">okit</p>
            </aside>

            <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <p className="flex uppercase text-light-600 items-center gap-4 list-none">{"\/\/ "}
                     Project of S5SAJID
                </p>
            </nav>

            <aside className="flex items-center gap-4">
                <Link
                    href="/editor"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        GET STARTED
                    </span>
                </Link>
                {
                    //TODO: Wire up user button
                }
            </aside>
        </header>
    );
}