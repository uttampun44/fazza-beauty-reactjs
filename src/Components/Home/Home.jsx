import React, { useState } from 'react'
import Header from '../Header/Header'
import Servicepage from '../servicepage/Servicepage';
import Frequentlyaskequestion from '../FAQ/Frequentlyaskequestion';
import Footer from '../footer/Footer';
import Accordinitem from './Accordinitem';
import Accor from './accor.js'

function Home() {

const [data, setData] = useState(Accor);
console.log(data)
  return (
    <div>
        <Header/>
        <main>
            <section className='bg-[#37517E]'>
                 <div className='hero-section flex justify-between items-center max-w-[992px] ml-auto mr-auto'>
                       <div className='hero-section-title w-[55%] pl-8'>
                            <h1 className='text-white text-[32px] font-bold leading-[39px] font-display max-w-md'>Solusi Terbaik Untuk Meningkatkan Income Kamu</h1>
                            <p className='text-white font-normal font-display max-w-[95%] leading-5 mt-1'>Perluas Jaringan Bisnis Dan Bangun Team Hebat Kamu Untuk Sukses Bersama</p>
                            <div className='button-video pt-[5.2vw] flex items-center'>
                              <div className='join-sekang mr-[2vw]'>
                                  <button className='border-spacing-4 border-2 border-[#47B2E4] pt-2 pb-2 px-4 py-4 rounded-[24px] text-white bg-[#47B2E4]'>Join Sekarang</button>
                              </div>
                              <div className='tom-video'>
                                   <img src='/src/assets/Images/Frame 6.png' className='w-[108px] h-[22px]'/>
                              </div>
                            </div>
                       </div>
                         
                         <div className='mt-8 w-[45%]'>
                              <img src='/src/assets/Images/hero-img.svg'/>
                        </div>
                 </div>
            </section>
            {/* brand logo gallery section */}
            <section>
                <div className='image-gallery pt-[2.4vw] pb-[2.4vw] bg-[#F3F5FA] flex justify-center items-center'>
                    <div className='w-[5%] mr-[150px] ml-[150px]'><img src='/src/assets/Images/image-logo-one.png' className='w-[108px] h-[39px] object-contain'/></div>
                    <div className='w-[5%] mr-[150px]'><img src='/src/assets/Images/image-logo-two.png' className='w-[108px] h-[39px] object-contain'/></div>
                    <div className='w-[5%] mr-[150px]'><img src='/src/assets/Images/image-logo-three.png' className='w-[108px] h-[39px] object-contain'/></div>
                    <div className='w-[5%] mr-[150px]'><img src='/src/assets/Images/image-logo-four.png' className='w-[108px] h-[39px] object-contain'/></div>
                </div>
            </section>
            <section className='service bg-[#fff]'>
                  <div className='max-w[992px] mb-9 mt-9'>
                              <div className='about-us'>
                                <h2 className='text-center font-display leading-[29px] text-[#37517E] text-[29px] font-semibold normal'>Tentang Kami</h2>
                                 <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                              </div>
                              <div className='service-div flex justify-evenly max-w-[992px] mr-auto ml-auto mt-9'>
                      <div className='service-subsection w-[50%]'>
                      <div>
                       <p className='text-[#4F4F4F] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='list-service inline-flex'>
                          <ul>
                               <li className='flex'><img className='w-6 h-6 mr-4' src='/src/assets/Images/arrow.png'/><p className='text-[#4F4F4F] text-sm'>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</p></li>
 <li className='flex'><img className='w-6 h-6 mr-4' src='/src/assets/Images/arrow.png'/><p className='text-[#4F4F4F] text-sm'>Duis aute irure dolor in reprehenderit in voluptate velit </p>
</li>
 <li className='flex'><img className='w-6 h-6 mr-4' src='/src/assets/Images/arrow.png'/><p className='text-[#4F4F4F] text-sm'>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</p></li>
                          </ul>
                    </div>
                      </div>
                    <div className='service-second-row w-[50%]'>
                       <p className='text-[#4F4F4F]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>                      
                         <button className='border-2 border-[#47B2E4] pt-2 px-4 py-4 pb-2 rounded-lg text-[#47B2E4] mt-4'>Pelajari Selengkapnya</button>
                    </div>
                  </div>
                  </div>
            </section>

            <section className='what-we-offer bg-[#F3F5FA]'>
                   <div className='sub-section-what-we-offer max-w-[1109px] ml-auto mr-auto'>
                         <div className='flex justify-around align-middle'>
                         <div className='accordin-section w-[50%] pt-36'>
                             <div className='offer-heading mb-9'>
                                 <p className='font-display text-[#37517E] leading-6 font-normal'>Impian Kami Dalam Membangun <span className='font-display text-[#37517E] font-semibold'>Sistem Bisnis Yang Dapat Di Pelajari Oleh Pemula Dengan Bimbingan Mentor Ahli</span></p>
                             </div>
                             <div className='accordin-div'>
                                 {
                                  data.map((accor) =>{
                                    return  <Accordinitem key={accor.id} {...accor}/>
                                  })
                                 }
                             </div>
                       </div>
                       <div className='team-image-offer w-[50%] pt-7'>
                           <img src='/src/assets/Images/section-background.svg'/>
                       </div>
                         </div>
                       </div>

                       <div className='max-w-[992px] mr-auto ml-auto'>
                            <div className='flex pb-20 gap-4'>
                                <div className='bg-white px-5 py-5 pt-6 shadow-[2px_8px_10px_0px_grey]'>
                                    <img src='/src/assets/Images/bi_shop.png' className='w-[28px] h-[28px]'/>
                                    <p className='font-display font-normal text-base text-[#37517E] leading-4 mt-2 mb-2'>Modern Bisnis</p>
                                    <p className='font-display font-normal text-[10px] text-[#37517E] leading-4'>Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital  </p>
                                </div>
                                <div className='bg-white px-5 py-5 pt-6 shadow-[2px_8px_10px_0px_grey]'>
                                      <img src='/src/assets/Images/icomoon-free_lab.png'className='w-[28px] h-[28px]'/>
                                      <p className='font-display font-normal text-base text-[#37517E] leading-4 mt-2 mb-2'>Modern Bisnis</p>
                                    <p className='font-display font-normal text-[10px] text-[#37517E] leading-4'>Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital  </p>
                                </div>
                                <div className='bg-white px-5 py-5 pt-6 shadow-[2px_8px_10px_0px_grey]'>
                                    <img src='/src/assets/Images/cloud-done-outline-rounded.png' className='w-[28px] h-[28px]'/>
                                    <p className='font-display font-normal text-base text-[#37517E] leading-4 mt-2 mb-2'>Modern Bisnis</p>
                                    <p className='font-display font-normal text-[10px] text-[#37517E] leading-4'>Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital  </p>
                                </div>
                                <div className='bg-white px-5 py-5 pt-6 shadow-[2px_8px_10px_0px_grey]'>
                                    <img src='/src/assets/Images/ic_round-gpp-good.png' className='w-[28px] h-[28px]'/>
                                    <p className='font-display font-normal text-base text-[#37517E] leading-4 mt-2 mb-2'>Modern Bisnis</p>
                                    <p className='font-display font-normal text-[10px] text-[#37517E] leading-4'>Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital  </p>
                                </div>
                            </div>
                       </div>
            </section>
            <Servicepage />
            <Frequentlyaskequestion />
            <Footer />
        </main>
    </div>
  )
}

export default Home