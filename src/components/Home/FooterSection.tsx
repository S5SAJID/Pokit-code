import Logo from "../Logo";

<footer className="bg-slate-400 rounded-t-lg md:rounded-none mt-20">
    <div className="container flex-wrap gap-5 mx-auto p-5 flex items-center justify-between">
        <Logo showText={true} showConstLable={false} isDarkText={true} />
        <p>Created with &hearts; by <a href="http://s5sajid.github.io" className="font-semibold underline underline-offset-2 decoration-2" target="_blank">S5 SAJID</a> & Copyright &copy; {new Date(Date.now()).getUTCFullYear()} Pokit Code</p>
        <p>Contact: <a href="mailto:sk8299148@gmail.com" className="font-semibold underline underline-offset-2 decoration-2">sk8299148@gmail.com</a></p>
    </div>
</footer>