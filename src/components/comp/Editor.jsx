import React from 'react'

export default function Editor({type, icon, onChange, onCopyBtn}) {
  return (
    <div className='list-group'>
        <div className="bg-secondary d-flex justify-content-between text-white align-items-center py-1 px-2 list-group-item border-0">
          <div><i className={icon}/> {type}</div>
          <div className="btns">
            <button className="btn btn-sm p-0 px-1 btn-dark" onClick={() => onCopyBtn(type.toLowerCase())}><i className='ri-clipboard-line'/></button>
        </div>
        </div>
        <code onKeyUp={onChange}>
          <code-input lang={type} class="content" id="js" placeholder={`Type some ${type} code here...`} ></code-input>
        </code>
        { type === 'JS' ? 
            <div className='bg-danger-subtle error-wraper d-none rounded p-2 mb-2' style={{height: "6rem"}}>Console
              <div>
                <code className='error-shower'></code>
              </div>
            </div>
          : null
        }
    </div>
  )
}