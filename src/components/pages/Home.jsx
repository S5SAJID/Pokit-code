import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export default function Home() {
  return (
    <div className='p-5 m-5'>
        <CodeMirror lang={javascript}/>
    </div>
  )
}
