import React from 'react'
import Header from '../Header/Header'

function Home() {
  return (
    <div>
        <Header/>
        <main>
            <section className='bg-[#37517E]'>
                 <div className='hero-section flex justify-between items-center max-w-[992px] ml-auto mr-auto'>
                       <div className='hero-section-title w-[55%] pr-8'>
                            <h1 className='text-white text-[32px] font-bold leading-[39px] font-display max-w-md'>Solusi Terbaik Untuk Meningkatkan Income Kamu</h1>
                            <p className='text-white font-normal font-display max-w-lg leading-5 mt-1'>Perluas Jaringan Bisnis Dan Bangun Team Hebat Kamu Untuk Sukses Bersama</p>
                       </div>
                         
                         <div className='mt-8 w-[45%]'>
                              <img src='/src/assets/Images/hero-img.svg'/>
                        </div>
                 </div>
            </section>
        </main>
    </div>
  )
}

export default Home