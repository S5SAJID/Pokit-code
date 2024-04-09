"use client"

import '@/app/globals.css';
import Editor from "@/components/Editor/Editors";
import Footer from "@/components/Editor/Footer";
import Navbar from "@/components/Navbar";
import CodeContextProvider, { Code } from '@/context/CodeContextProvider';
import demoCode from "@/utils/demoCode";
import { downloadHtml, manageClassName } from '@/utils/editorUtils';
import { useEffect, useRef, useState } from "react";

export default function EditorPage() {
    const [html, setHtml] = useState('<h1>Pokit Code</h1>');
    const [css, setCSS] = useState('/* CSS code ... */');
    const [javaScript, setJavaScript] = useState('// javascript code ...');

    useEffect(() => {
        updateHTML(demoCode.HTML);
        updateCSS(demoCode.CSS);
    }, [])

    const preViewElement: any = useRef();

    const updateHTML = (value: string) => {
        setHtml(value);
        preViewElement.current.contentDocument.body.innerHTML = value;
    }

    const updateCSS = (value: string) => {
        setCSS(value);
        preViewElement.current.contentDocument.head.innerHTML = `<style>${value}</style>`;
    }

    // FIX: USE A MUCH EFFIECIENT WAY
    const updateJavaScript = (value: any) => {
        try {
            setJavaScript(value);
            let result = preViewElement.current.contentWindow.eval(value);
            manageClassName(".error_container", "hidden", "ADD");
            document.querySelector(".error_container_title")!.innerHTML = "";
            if (result !== undefined) {
                manageClassName(".error_container", "error", "REMOVE");
                manageClassName(".error_container", "info", "ADD");
                manageClassName(".error_container", "hidden", "REMOVE");
                document.querySelector(".error_container_title")!.innerHTML = "Console";
                document.querySelector(".error_container_desc")!.innerHTML = result;
            }
        } catch (error: any) {
            setJavaScript(value);
            manageClassName(".error_container", "info", "REMOVE");
            manageClassName(".error_container", "error", "ADD");
            manageClassName(".error_container", "hidden", "REMOVE");
            document.querySelector(".error_container_title")!.innerHTML = error.name;
            document.querySelector(".error_container_desc")!.innerHTML = error.message;
        }
    };

    let codeValue: Code = {
        codes: [
            {type: "HTML", onChanged: updateHTML, value: html},
            {type: "CSS", onChanged: updateCSS, value: css},
            {type: "JavaScript", onChanged: updateJavaScript, value: javaScript},
        ],
        onDownload: downloadHtml
    }

    return (
        <CodeContextProvider value={codeValue}>
            <main className="w-full h-lvh flex flex-col">
                <Navbar />
                <Editor previewRef={preViewElement} />
                <div className="error_container hidden absolute w-72 bottom-2 left-2 console border-2 px-1 py-2 text-light-400 rounded">
                    <h4 className='text-md font-semibold error_container_title'></h4>
                    <p className='text-sm font-thin error_container_desc'></p>
                </div>
                <Footer/>
            </main>
        </CodeContextProvider>
    );
}