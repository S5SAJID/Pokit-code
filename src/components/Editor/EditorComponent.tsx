"use client"
import CodeApparetment, { Extension } from '@uiw/react-codemirror';
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import icons from '@/utils/icons';
import { useContext } from 'react';
import { CodeContext } from '@/context/CodeContextProvider';
import { copyCode } from '@/utils/editorUtils';

export default function CodeEditor() {
  let codeContext = useContext(CodeContext);

  const getCodeExt = (type: string): Extension => {
    if (type=='HTML') {
      return html()
    } else if (type=='CSS') {
      return css()
    } else {
      return javascript()
    }
  }

  return (
    <>
      {codeContext.codes.map((code, index) => {
        
        return <div className='h-full relative overflow-hidden bg-dark rounded-xl' key={index}>
          <div className='bg-slate-800 px-3 flex items-center justify-between text-light-400 py-1 absolute top-0 w-full z-10'>
            <div className="editor_title leading-[0]">{code.type}</div>
            <div className="editor_actions flex gap-1">
              <button className="p-1 block m-0 rounded text-light-400/50 hover:text-light-400/80 hover:bg-light-400/20" onClick={() => copyCode(code.value, code.type)} title={`Copy ${code.type} code`}><icons.copyIcon className="h-4 w-4" /></button>
            </div>
          </div>
          <CodeApparetment onChange={(e) => code.onChanged(e)} value={code.value} extensions={[getCodeExt(code.type)]} theme={tokyoNight} minHeight='100%' maxHeight='100%'  className='h-full text-base pt-8'/>
        </div>
      })}
    </>
  );
}

