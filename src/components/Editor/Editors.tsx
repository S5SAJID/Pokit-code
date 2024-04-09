"use client";
import CodeEditor from "./EditorComponent";
import {useCallback, useRef, useState} from 'react';

export default function Editor({previewRef}: {previewRef:any}) {
    return (
        // FIX: CONVERT THE PROPS METHOD TO CONTEXT METHOD
        <div className="w-full grid md:grid-cols-12 h-full overflow-y-hidden">
        <div className="editors bg-dark px-2 gap-2 col-span-2 border border-dark grid grid-rows-3 overflow-hidden max-h-full w-full items-center">
          <CodeEditor/>
        </div>
        <div className="editors preview w-full md:h-full h-[92%] hidden z-10 md:block col-span-10 bg-dark pr-2">
          <div  className="h-full rounded-xl overflow-hidden bg-light-400 ">
            <iframe ref={previewRef}  className="h-full w-full previewCode"></iframe>
          </div>
        </div>
      </div>
    );
}