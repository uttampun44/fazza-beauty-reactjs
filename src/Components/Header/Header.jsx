import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
    
  return (
    <div className='header'>
         <header className='bg-[#37517E]'>
             <nav>
                <div className='fazza-nav flex justify-between items-center pt-5 pb-5 px-8 py-8 max-w-[992px] ml-auto mr-auto'>
                    <div>
                        <img src='/src/assets/Images/logo-fazza.png' className='w-[129px;] h-[36.68px]'/>
                    </div>
                    <div className='justify-between items-center flex'>
                       <ul className='justify-between items-center inline-flex gap-4'>
                         <li><Link to='/' className='font-display text-white non-italic leading-6 font-normal text-sm'>Beranda</Link></li>
                         <li><Link to ='/' className='font-display text-white non-italic leading-6 font-normal text-sm'>Tentang Kami</Link></li>
                         <li><Link to='/' className='font-display text-white non-italic leading-6 font-normal text-sm'>Produk</Link></li>
                         <li><Link to='/' className='font-display text-white non-italic leading-6 font-normal text-sm'>Produk</Link></li>
                       </ul>
                       <button className='border-spacing-4 border-2 border-[#47B2E4] pt-2 pb-2 px-4 py-4 rounded-[24px] text-white ml-4'>Join Sekarang</button>
                    </div>
                    <div className='hidden ...'>
                        <MenuIcon className='text-white'/>
                    </div>
                </div>
             </nav>
         </header>
    </div>
  )
}

export default Header