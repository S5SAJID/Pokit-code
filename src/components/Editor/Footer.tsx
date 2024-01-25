export default function Footer({code,downloadFile}: {code: any,downloadFile:Function}) {
    return (
        <footer className="py-2 w-full bg-dark flex items-center justify-between px-2">
            <div></div>

            <div className="btns px-6 gap-3 flex">
                <button className="btn px-2 text-sm border rounded border-light/50 text-light/50 hover:border-light hover:bg-light/10 hover:text-light" onClick={() => downloadFile()}>Download</button>
                <button className="btn px-2 text-sm border rounded border-light/50 text-light/50 hover:border-light hover:bg-light/10 hover:text-light">Share</button>
            </div>
        </footer>
    );
}