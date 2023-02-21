import { grid } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function Servicepage() {

  return (
    <section className='service-sections'>
           <div className='title-section-service flex justify-center mt-2'>
                <div className='w-[50%] mb-14 mt-4'>
                    <h4 className='text-center font-display text-lg leading-7 font-bold text-normal text-[24px] uppercase text-[#37517E]'>produk kami</h4>
                    <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                    <p className='pt-6 text-center'>Produk kecantikan yang bisa meningkatkan kepercayaan diri kamu setiap harinya dengan berbagai macam varian yang dapat disesuaikan dengan selera yang kamu mau</p>
                </div>
           </div>
           <div className='submenu-link flex justify-center gap-7 mb-10 items-baseline'>
                   <Link to='/semua' className='border-3 bg-[#47B2E4] pt-3 pb-3 px-6 py-6 rounded-[29px] text-white font-medium font-display leading-4 border-1 text-[24px]'>Semua</Link>
                   <Link to='/lip' className='text-[#37517E] font-display font-medium leading-4 text-[24px]'>Lip</Link>
                   <Link to='/serum' className='text-[#37517E] font-display font-medium leading-4 text-[24px]'>Serum</Link>
                   <Link to='/kolagen' className='text-[#37517E] font-display font-medium leading-4 text-[24px]'>Kolagen</Link>
                </div>

                <div className='image-grid grid w-[989px] mr-auto ml-auto grid-cols-3 grid-rows-3 gap-6 mb-14'>
                     <div className=''><img src='/src/assets/Images/shopping gallery.jpg' className='h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery one.jpg' className='h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery two.jpg' className='h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery three.jpg' className=' h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery four.jpg'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery five.jpg' className='h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery six.jpg' className='h-[100%] object-fill'/></div>
                </div>
    </section>
  )
}

export default Servicepage