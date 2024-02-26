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
    
    const updateJavaScript = (value: string) => {
        setJavaScript(value);
        preViewElement.current.contentWindow.eval(value);
    }

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
        let fileName = prompt("Enter file html filename without .html to download.\n for example: index")
        link.href = url;
        link.download = `${fileName}.html`;
        link.click();
        link.remove();
      }

    return (
      <main className="w-full h-lvh flex flex-col">
        <Navbar />
        <Editor code={wholeCode} previewRef={preViewElement}/>
        <Footer code={wholeCode} downloadFile={downloadHtml}/>
      </main>
    );
}