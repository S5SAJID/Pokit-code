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

const playIcon = ({classname=''}: {classname: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} style={{width: 20, fill: "green"}} version="1.1" id="lni_lni-play" x="0px" y="0px" viewBox="0 0 64 64">
        <g>
            <path d="M9.7,62.3c-0.7,0-1.5-0.2-2.1-0.6c-1.4-0.8-2.2-2.1-2.2-3.7V6c0-1.5,0.8-2.9,2.2-3.7c1.4-0.8,3-0.7,4.4,0.1l44.8,26.1   c1.3,0.8,2,2.1,2,3.6c0,1.4-0.7,2.8-2,3.5L11.9,61.6C11.2,62,10.4,62.3,9.7,62.3z M9.6,57.8C9.6,57.8,9.6,57.8,9.6,57.8L9.6,57.8z    M9.8,6.4v51.2l44-25.6L9.8,6.4z" />
        </g>
    </svg>
)

export default { copyIcon, plusIcon, playIcon };