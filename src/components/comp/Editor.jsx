import React from 'react'

export default function Editor({type, value, icon, onChange}) {
  let name = type;
  let refName = type === 'HTML' ? "html" : type === "CSS" ? "css" : "js";
  return (
    <div className='list-group'>
        <div className="bg-secondary text-white py-1 px-2 list-group-item border-0"><i className={icon}/> {name}</div>
        <code>
        <textarea onChange={onChange} className='w-100 form-control border rounded-bottom rounded-top-0 list-group-item' name={refName} id={refName} placeholder={`Type some ${type} code here...`} rows="10"></textarea>
        </code>
    </div>
  )
}
