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

/**
 * The above type `CodeType` in TypeScript React represents a code snippet with a type, value, and an
 * `onChanged` function.
 * @property {string} type - The `type` property in the `CodeType` type represents the type of code,
 * such as JavaScript, CSS, HTML, etc.
 * @property {string} value - The `value` property in the `CodeType` type represents the actual code
 * value, which is a string containing the code itself.
 * @property {Function} onChanged - The `onChanged` property in the `CodeType` type is a function that
 * can be called when the value of the code type is changed. This function is typically used to notify
 * other parts of the code that the value has been updated and trigger any necessary actions or
 * updates.
 */
export type CodeType = {
    type: string,
    value: string,
    onChanged: Function,
}

/**
 * The `Code` type in TypeScript React consists of an array of `CodeType` elements and a function
 * `onDownload`.
 * @property {CodeType[]} codes - The `codes` property in the `Code` type is an array of `CodeType`
 * elements.
 * @property {Function} onDownload - The `onDownload` property in the `Code` type is a function that is
 * expected to be called when a download action is triggered. It is a callback function that can be
 * used to handle the download functionality within the context of the `Code` type.
 */
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