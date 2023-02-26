import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Faqaccordin({image, title, content}) {

     const [faqdisplay, setFaq] = useState(false);

    const accordinFaq = () =>{
     setFaq(!faqdisplay)
     console.log("Hello")
    }
  return (
    <div>
        <div className='flex justify-between bg-white px-4 py-2 mb-2 rounded-md'>
             <img src={image} className='w-[1rem] h-[1rem]'/>
             <p className='font-display text-sm leading-4 font-medium text-[#37517E]'>{title}</p>
            <button onClick={accordinFaq}> <KeyboardArrowDownIcon/></button>
        </div>
        <div className='faq-content'>
           <p style={{display: faqdisplay? 'block' : 'none'}} className='pt-4 pb-4'>{content}</p>
        </div>
    </div>
  )
}

export default Faqaccordin