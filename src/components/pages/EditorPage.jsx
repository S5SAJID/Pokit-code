import Editor from '../comp/Editor';
import Navbar from '../comp/Navbar';
import {  } from '@uiw/react-codemirror'

export default function EditorPage() {
  let data = {
    'html': "",
    'css': "",
    "js": "",
  }

  const onHtmlChange = (e) => {
    document.querySelector("iframe").contentDocument.body.innerHTML = e.target.value;
    data['html'] = e.target.value;
  };

  const onCssChange = (e) => {
    document.querySelector("iframe").contentDocument.head.innerHTML = "<style>" + e.target.value + "</style>";
    data['css'] = e.target.value;
  };

  const onJsChange = (e) => {
    try {
        document.querySelector("iframe").contentWindow.eval(e.target.value)
        data['js'] = e.target.value;
        document.querySelector(".error-wraper").classList.add("d-none");
        document.querySelector(".error-shower").innerHTML = "";
    } catch (error) {
        console.log(error.message);
        document.querySelector(".error-wraper").classList.remove("d-none");
        document.querySelector(".error-shower").innerHTML = error.message;  
        data['js'] = e.target.value;
    }
  };

  const downloadHtml = () => {
    let newFileData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokit</title>
        <style>${data['css']}</style>
    </head>
    <body>
    ${data['html']}
    </body>
    <script>${data['js']}</script>
    </html>`;


    let blob = new Blob([newFileData]);
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = 'pokit.html';
    link.click();
    link.remove();
    console.log(data);
  }

  let copyCode = (type) => {
    if (data[type].length !== 0) {
      navigator.clipboard.writeText(data[type]);
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

  return (
    <div className='vh-100'>
      <Navbar title="Pokit" project="Simple Project"/>
      <div className='d-flex bg-dark vh-no p-2'>
        <div className="editors d-flex flex-column h-100 px-2" style={{width: '24rem'}}>
              <Editor onChange={onHtmlChange} onCopyBtn={copyCode} type="HTML" icon="ri-html5-line"/>
              <Editor onChange={onCssChange} onCopyBtn={copyCode} type="CSS" icon="ri-css3-line"/>
              <Editor onChange={onJsChange} onCopyBtn={copyCode} type="JS" icon="ri-javascript-line"/>
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
