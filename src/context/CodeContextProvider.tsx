"use client"
import { createContext } from "react";

const initialCode: Code = {
    onDownload: (e: any) => console.log(e),
    codes: [
        {
            type: "HTML",
            onChanged: (e: any) => console.log(e),
            value: "",
        }
    ],
}

export const CodeContext = createContext(initialCode);

export type CodeType = {
    type: string,
    value: string,
    onChanged: Function,
}

export type Code = {
    codes: CodeType[],
    onDownload: Function
}

export default function CodeContextProvider({children, value}: {children: React.JSX.Element, value: Code}) {
    return (
        <CodeContext.Provider value={value}>
            {children}
        </CodeContext.Provider>
    );
}