"use client"
import CodeApparetment from '@uiw/react-codemirror';
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import icons from '@/utils/icons';

export default function CodeEditor({lang, value, onChange}: {lang: string, value:any, onChange: any}) {
    let langExtention: any;

    if (lang=='HTML') {
      langExtention = html();
    } else if (lang=="CSS") {
      langExtention = css();
    } else if (lang=="JavaScript") {
      langExtention = javascript();
    }

    let copyCode = () => {
      if (value.length !== 0) {
        navigator.clipboard.writeText(value);
      } else {
        let alertEle = document.createElement("div");
        alertEle.className = 'absolute transition-all ease duration-200 w-72 bottom-8 right-8 border border-dark/10 bg-dark/30 text-light p-5 rounded backdrop-blur-sm';
        alertEle.role = 'alert';
        alertEle.innerHTML = 'Cant copy empty ' + lang.toUpperCase()+ ' code!';
        document.body.appendChild(alertEle);
        setTimeout(() => {
          alertEle.classList.add("opacity-0");
          alertEle.remove();
        }, 1600);
      }
    }

    return (
      <div className='h-full relative overflow-hidden bg-dark rounded-xl'>
        <div className='bg-slate-800 px-3 flex items-center justify-between text-light py-1 absolute top-0 w-full z-10'>
          <div className="editor_title leading-[0]">{lang}</div>
          <div className="editor_actions flex gap-1">
            <button className="p-1 block m-0 rounded text-light/50 hover:text-light/80 hover:bg-light/20" onClick={copyCode} title={`Copy ${lang} code`}><icons.copyIcon className="h-4 w-4" /></button>
            {/* {lang == 'HTML' ? <button className="p-1 block m-0 rounded text-light/50 hover:text-light/80 hover:bg-light/20"><icons.plusIcon className="h-4 w-4" /></button> : null} */}
          </div>
        </div>
        <CodeApparetment onChange={(e) => onChange(e)} value={value} extensions={[langExtention]} theme={tokyoNight} minHeight='100%' maxHeight='100%'  className='h-full text-base pt-8'/>
      </div>
    );
}

