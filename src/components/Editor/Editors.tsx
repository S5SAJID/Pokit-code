"use client";
import CodeEditor from "./EditorComponent";
import {useCallback, useRef, useState} from 'react';

export default function Editor({code, previewRef}: {code: any, previewRef:any}) {
    return (
        <div className="w-full grid md:grid-cols-12 h-full overflow-y-hidden">
        <div className="editors bg-dark px-2 gap-2 col-span-2 border border-dark grid grid-rows-3 overflow-hidden max-h-full w-full items-center">
          <CodeEditor lang="HTML" value={code.html.value} onChange={code.html.update}/>
          <CodeEditor lang="CSS" value={code.css.value} onChange={code.css.update}/>
          <CodeEditor lang="JavaScript" value={code.javaScript.value} onChange={code.javaScript.update}/>
        </div>
        <div className="editors preview w-full md:h-full h-[92%] hidden z-10 md:block col-span-10 bg-dark pr-2">
          <div  className="h-full rounded-xl overflow-hidden bg-light ">
            <iframe ref={previewRef}  className="h-full w-full previewCode"></iframe>
          </div>
        </div>
      </div>
    );
}