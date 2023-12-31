import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night'
import { color } from '@uiw/codemirror-extensions-color'

export default function Editor({type, onChange, onCopyBtn}) {

  return (
      <div className='mb-2 main-editor'>
        {editorEle(type)}
      </div>
    )

    function title(title, icon) {
      return (
          <div className='d-flex p-1 rounded-top align-items-center border-0 p-0 px-2 bg-secondary text-light justify-content-between'>
            <p className='m-0'><i className={icon} /> {title}</p>
            <button className="btn btn-sm py-0 px-1 btn-dark" onClick={() => onCopyBtn(type)}><i className='ri-clipboard-line'/></button>
          </div>
      );
    }

    function editorEle(type) {
      switch (type) {
        case "HTML":
          return (
            <div>
                {title("HTML", "ri-html5-line")}
                <CodeMirror basicSetup={{autocompletion: true}} className='editor rounded-bottom overflow-hidden'  theme={tokyoNight} title={type} extensions={[html(), color]} minHeight='200px' maxHeight='40vh' onChange={onChange}/>
            </div>
          )
          break;
          
        case "CSS":
          return (
            <div>
                {title("CSS", "ri-css3-line")}
                <CodeMirror className='editor rounded-bottom overflow-hidden' theme={tokyoNight} title={type} extensions={[css(), color]} minHeight='200px' maxHeight='40vh' onChange={onChange}/>
            </div>
          )
          break;
        case "JS":
          return (
            <div>
                {title("JavaScript", "ri-javascript-line")}
                <CodeMirror className='editor rounded-bottom overflow-hidden' theme={tokyoNight} title={type} extensions={[javascript()]} minHeight='200px' maxHeight='40vh' onChange={onChange}/>
            </div>
          )
          break;
      }
    }
  }
  // <div className='>
  //     <div className="bg-secondary d-flex justify-content-between text-white align-items-center py-1 px-2-item border-0">
  //       <div><i className={icon}/> {type}</div>
  //       <div className="btns">
  //         <button className="btn btn-sm p-0 px-1 btn-dark" onClick={() => onCopyBtn(type.toLowerCase())}><i className='ri-clipboard-line'/></button>
  //     </div>
  //     </div>
  //     <code onKeyUp={onChange}>
  //       <code-input lang={type} class="content" id="js" placeholder={`Type some ${type} code here...`} ></code-input>
  //     </code>
  //     { type === 'JS' ? 
  //         <div className='bg-danger-subtle error-wraper d-none rounded p-2 mb-2' style={{height: "6rem"}}>Console
  //           <div>
  //             <code className='error-shower'></code>
  //           </div>
  //         </div>
  //       : null
  //     }
  // </div>