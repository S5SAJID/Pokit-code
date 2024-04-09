
/**
 * Copy Code to clipboard & show alert if code is empty.
 */
export const copyCode = (value: string, type: string) => {
    if (value.length !== 0) {
        navigator.clipboard.writeText(value);
    } else {
        let alertEle = document.createElement("div");
        alertEle.className = 'absolute transition-all ease duration-200 w-72 bottom-8 right-8 border border-dark/10 bg-dark/30 text-light-400 p-5 rounded backdrop-blur-sm';
        alertEle.role = 'alert';
        alertEle.innerHTML = 'Cant copy empty ' + type.toUpperCase() + ' code!';
        document.body.appendChild(alertEle);
        setTimeout(() => {
            alertEle.classList.add("opacity-0");
            alertEle.remove();
        }, 1600);
    }
}

/**
 * Downlaods the whole code into html file
 */
export const downloadHtml = (html: string, css: string, javaScript: string) => {
    let newFileData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokit</title>
        <style>${css}</style>
    </head>
    <body>
    ${html}
    </body>
    <script>${javaScript}</script>
    </html>`;

    let blob = new Blob([newFileData]);
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    let fileName = prompt("Enter file html filename")
    if (fileName?.includes('.html')) {
        fileName = fileName.replace(".html", "");
    }
    link.href = url;
    link.download = `${fileName}.html`;
    link.click();
    link.remove();
}

type ClassNameActions = "ADD" | "REMOVE";

/**
 * Simplifies the add and remove classes part
 */
export const manageClassName = (elementClass: string, className: string, action: ClassNameActions) => {
    const ele = document.querySelector(elementClass);
    if (action == "ADD") {
        ele!.classList.add(className);
    } else if (action == "REMOVE") {
        ele!.classList.remove(className);
    }
}