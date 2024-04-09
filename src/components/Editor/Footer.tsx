"use client"
import { CodeContext } from "@/context/CodeContextProvider";
import { useContext } from "react";

export default function Footer() {
    const codeContext = useContext(CodeContext);
    return (
        <footer className="py-2 w-full bg-dark flex items-center justify-between px-2">
            <div></div>

            <div className="btns px-6 gap-3 flex">
                <button className="btn px-2 text-sm border rounded border-light-400/50 text-light-400/50 hover:border-light-400 hover:bg-light-400/10 hover:text-light-400" onClick={() => codeContext.onDownload()}>Download</button>
                <button className="btn px-2 text-sm border rounded border-light-400/50 text-light-400/50 hover:border-light-400 hover:bg-light-400/10 hover:text-light-400">Share</button>
            </div>
        </footer>
    );
}