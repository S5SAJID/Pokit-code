import Editor from '../comp/Editor'

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
    } catch (error) {
        console.log(error.message);
    }
  };

  const downloadHtml = () => {
    let newFileData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokit</title>
        ${data['css']}
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
  }

  return (
    <div className='d-flex bg-dark vh-no p-2'>
        <div className="editors d-flex flex-column gap-4 h-100 px-2" style={{width: '24rem'}}>
            <Editor onChange={onHtmlChange} type="html" icon="ri-html5-line"/>
            <Editor onChange={onCssChange} type="CSS" icon="ri-css3-line"/>
            <Editor onChange={onJsChange} type="JavaScript" icon="ri-javascript-line"/>
            <button onClick={downloadHtml} className='btn btn-outline-secondary'><i className='ri-download-line'/> Download</button>
        </div>
        <div className="ms-2 preview bg-light w-100 rounded-4">
            <iframe title='Preview' className='w-100 h-100'></iframe>
        </div>
    </div>
  )
}
