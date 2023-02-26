import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Accordinitem({id, title, content}) {

    const[accordin, setAccording] = useState(false);

    const showAccordin = () =>{
        setAccording(!accordin);
    }
  
  return (
    <div>
         <div className='flex justify-between bg-white px-4 py-2 mb-2 rounded-md'>
             <span className='text-[#47B2E4] leading-4 text-sm font-normal'>{id}</span>
             <span className='font-display text-sm leading-4 font-medium'>{title}</span>
             <button onClick={showAccordin}><KeyboardArrowDownIcon /></button>
         </div>
         <div style={{display : accordin?  'block' : 'none'}} className='pt-2 pb-2'>
         <span className='font-display text-sm leading-4 font-semibold'>{content}</span>
         </div>
    </div>
  )
}

export default Accordinitem