/**
 * The `copyCode` function copies the provided value to the clipboard and displays an alert if the
 * value is empty.
 * @param {string} value - The `value` parameter in the `copyCode` function represents the code snippet
 * or text that you want to copy to the clipboard.
 * @param {string} type - The `type` parameter in the `copyCode` function represents the type of code
 * that is being copied. It is used to provide context in the alert message that is displayed when
 * attempting to copy empty code.
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
 * The `downloadHtml` function creates and downloads an HTML file containing provided HTML, CSS, and
 * JavaScript code.
 * @param {string} html - The `html` parameter in the `downloadHtml` function represents the HTML
 * content that you want to include in the downloaded HTML file. This can be any valid HTML code that
 * you want to save into the file.
 * @param {string} css - The `css` parameter in the `downloadHtml` function represents the CSS code
 * that will be included in the `<style>` tag of the generated HTML file. This CSS code will be used to
 * style the content of the HTML file when it is displayed in a web browser.
 * @param {string} javaScript - JavaScript code that will be included in the downloaded HTML file.
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
 * The `manageClassName` function simplifies the process of adding or removing a class from a specified
 * element.
 * @param {string} elementClass - The `elementClass` parameter in the `manageClassName` function is a
 * string that represents the class of the HTML element you want to target for adding or removing a CSS
 * class.
 * @param {string} className - The `className` parameter in the `manageClassName` function refers to
 * the CSS class name that you want to add or remove from the specified element.
 * @param {ClassNameActions} action - The `action` parameter in the `manageClassName` function
 * specifies whether to add or remove a class from the specified element. It can have two possible
 * values: "ADD" to add a class or "REMOVE" to remove a class.
 */
export const manageClassName = (elementClass: string, className: string, action: ClassNameActions) => {
    const ele = document.querySelector(elementClass);
    if (action == "ADD") {
        ele!.classList.add(className);
    } else if (action == "REMOVE") {
        ele!.classList.remove(className);
    }
}