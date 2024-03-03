"use client"

import '@/app/globals.css';
import Editor from "@/components/Editor/Editors";
import Footer from "@/components/Editor/Footer";
import Navbar from "@/components/Navbar";
import demoCode from "@/utils/demoCode";
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

    const updateJavaScript = (value: any) => {
        try {
            setJavaScript(value);
            let result = preViewElement.current.contentWindow.eval(value);
            document.querySelector(".error_container")!.classList.add("hidden");
            document.querySelector(".error_container_title")!.innerHTML = "";
            if (result !== undefined) {
              document.querySelector(".error_container")!.classList.remove("error");
              document.querySelector(".error_container")!.classList.add("info");
              document.querySelector(".error_container")!.classList.remove("hidden");
              document.querySelector(".error_container_title")!.innerHTML = "Console";
              document.querySelector(".error_container_desc")!.innerHTML = result;
            }
        } catch (error: any) {
            setJavaScript(value);
            document.querySelector(".error_container")!.classList.remove("info");
            document.querySelector(".error_container")!.classList.add("error");
            document.querySelector(".error_container")!.classList.remove("hidden");
            document.querySelector(".error_container_title")!.innerHTML = error.name;
            document.querySelector(".error_container_desc")!.innerHTML = error.message;
        }
      };

    const wholeCode = {
        'html': {
            'value': html,
            'update': updateHTML
        },
        'css': {
            'value': css,
            'update': updateCSS
        },
        'javaScript': {
            'value': javaScript,
            'update': updateJavaScript
        }
    }

    const downloadHtml = () => {
        let newFileData = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pokit</title>
            <style>${css}</style>
        </head>
        <body>
        ${html}
        </body>
        <script>${javaScript}</script>
        </html>`;
    
        let blob = new Blob([newFileData]);
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        let fileName = prompt("Enter file html filename")
        if (fileName?.includes('.html')) {
            fileName=fileName.replace(".html","");
        }
        link.href = url;
        link.download = `${fileName}.html`;
        link.click();
        link.remove();
    }

    return (
      <main className="w-full h-lvh flex flex-col">
        <Navbar />
        <Editor code={wholeCode} previewRef={preViewElement}/>
        <div className="error_container hidden absolute w-72 bottom-2 left-2 console border-2 px-1 py-2 text-light rounded">
            <h4 className='text-md font-semibold error_container_title'></h4>
            <p className='text-sm font-thin error_container_desc'></p>
        </div>
        <Footer code={wholeCode} downloadFile={downloadHtml}/>
      </main>
    );
}