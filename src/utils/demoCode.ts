const demoCSSCode = `* {
    padding: 0;
    margin: 0;
}

body {
    height: 100vh;
    background: #22262b;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
  font-family: sans-serif;
  color: #d0d2d1;
}`;

const demoHTMLCode = `<h1>Pokit Code</h1>`

interface demoCodeInterface {
  CSS: string,
  HTML: string,
  JavaScript: string
}

const demoCode: demoCodeInterface = {
  CSS: demoCSSCode,
  HTML: demoHTMLCode,
  JavaScript: demoCSSCode
}

export default demoCode;