import Editor from '../comp/Editor';
import Navbar from '../comp/Navbar';
import React from 'react';

export default function EditorPage() {
  const [jsCode, setJsCode] = React.useState("console.log('hello world!');");
  const [htmlCode, sethtmlCode] = React.useState("console.log('hello world!');");
  const [cssCode, setCssCode] = React.useState("console.log('hello world!');");

  const downloadHtml = () => {
    let newFileData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokit</title>
        <style>${cssCode}</style>
    </head>
    <body>
    ${htmlCode}
    </body>
    <script>${jsCode}</script>
    </html>`;

    let blob = new Blob([newFileData]);
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = 'pokit.html';
    link.click();
    link.remove();
  }

  let copyCode = (type) => {
    let code = type === 'HTML' ? htmlCode : type === 'CSS' ? cssCode: type === "JS" ? jsCode: null;

    if (code.length !== 0) {
      navigator.clipboard.writeText(code);
    } else {
      let alertEle = document.createElement("div");
      alertEle.className = 'alert alert-warning alert-dismissible fade show position-absolute';
      alertEle.role = 'alert';
      alertEle.style.bottom = '1.5rem';
      alertEle.style.left = '1.5rem';
      alertEle.innerHTML = 'Cant copy empty ' + type.toUpperCase()+ ' code!' + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
      document.body.appendChild(alertEle);
      setTimeout(() => {
        alertEle.classList.remove("show");
        alertEle.remove();
      }, 1600);
    }
  }


  const onHtmlChange = React.useCallback((val) => {
    document.querySelector('iframe').contentDocument.body.innerHTML = val;
    sethtmlCode(val);
  }, []);

  const onCssChange = React.useCallback((val) => {
    document.querySelector('iframe').contentDocument.head.innerHTML = "<style>" + val + "</style>";
    setCssCode(val);
  }, []);

  const onJsChange = React.useCallback((val) => {
    try {
        setJsCode(val);
        let result = document.querySelector("iframe").contentWindow.eval(val)
        document.querySelector(".error-wraper").classList.add("d-none");
        document.querySelector(".error-shower").innerHTML = "";
        if (result !== undefined) {
          document.querySelector(".msg-wraper").classList.remove("d-none");
          document.querySelector(".msg-shower").innerHTML = result;
        } else {
          document.querySelector(".msg-wraper").classList.add("d-none");
          document.querySelector(".msg-shower").innerHTML = "";
        }
    } catch (error) {
        setJsCode(val);
        console.log(error.message);
        document.querySelector(".error-wraper").classList.remove("d-none");
        document.querySelector(".error-shower").innerHTML = error.message;  
    }
  }, []);

  return (
    <div className='vh-100'>
      <Navbar title="Pokit" project="Simple Project"/>
      <div className='d-flex bg-dark vh-no p-2'>
        <div className="editors h-100 px-2" style={{width: '24rem'}}>
              <Editor onChange={onHtmlChange} onCopyBtn={copyCode} type="HTML" icon="ri-html5-line"/>
              <Editor onChange={onCssChange} onCopyBtn={copyCode} type="CSS" icon="ri-css3-line"/>
              <Editor onChange={onJsChange} onCopyBtn={copyCode} type="JS" icon="ri-javascript-line"/>
              
              <div className='error-wraper d-none rounded p-3 bg-danger-subtle'>
                <p className='text-danger m-0 fw-semibold'>Error</p>
                <p className="border-danger">
                  <code className="error-shower"></code>
                </p>
              </div>

              <div className='msg-wraper d-none rounded p-3 mt-3 bg-info-subtle'>
                <p className='text-dark m-0 fw-semibold'>Console</p>
                <p className="border-danger">
                  <code className="msg-shower text-dark"></code>
                </p>
              </div>

          </div>
          <div className="ms-2 preview bg-light w-100 rounded-4">
              <iframe title='Preview' className='w-100 h-100'></iframe>
          </div>
      </div>
      <div  className='bg-dark px-5 d-flex justify-content-end align-items-center'>
        <div className="btns d-flex gap-2">
          <button onClick={downloadHtml} className='btn my-2 px-2 p-0 text-sm btn-sm btn-outline-secondary'><i className='ri-download-line'/> Download</button>
          <button className='btn my-2 px-2 p-0 text-sm btn-sm btn-outline-secondary'><i className='ri-share-line'/> Share</button>
        </div>
      </div>
    </div>
  )
}
