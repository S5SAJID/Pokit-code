const copyIcon = ({ className }: { className: string }) => <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
>
    <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
    <rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
</svg>;

const plusIcon = ({ className }: { className: string }) => <svg
stroke='currentColor'
fill='none'
strokeWidth='1.5'
viewBox='0 0 24 24'
strokeLinecap='round'
strokeLinejoin='round'
className={className}
height='1em'
width='1em'
xmlns='http://www.w3.org/2000/svg'
>
<line x1='3' y1='12' x2='21' y2='12'></line>
<line x1='3' y1='6' x2='21' y2='6'></line>
<line x1='3' y1='18' x2='21' y2='18'></line>
</svg>;

export default { copyIcon, plusIcon };