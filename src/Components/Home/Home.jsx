import React, { useState } from 'react'
import Header from '../Header/Header'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {

  const[displayAccordin, setAccordin] = useState(false)

  const detail = [
    {
      id: 1,
      title: "Apa sih Visi dari perusahaan kami?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      id:2, 
      title: "Bagaimana degan misi kami?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {  id: 3,
      title: "Kenapa harus memilih kami?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    }
  ]
  console.log(detail)

  const accordinservice = () =>{
    console.log(`it's working`)
    setAccordin(!displayAccordin)
  }
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
                              <div className='heading-service'>
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
                                  detail.map((accor) =>{
                                    return (
                                      <div className='' key={accor.id}>
                                       <div className='flex justify-between items-center bg-white mb-2 pl-4 pr-4 px-4 py-4'>
                                           <span className='text-[#47B2E4]'>{accor.id}</span>
                                           <p className='font-display font-semibold'>{accor.title}</p>
                                           <button onClick={accordinservice}><KeyboardArrowDownIcon /></button>
                                       </div>
                                       <div style={{display : displayAccordin ? 'block' : 'none'}}>
                                           <p className='pt-4 pb-4 font-display font-normal'>{accor.content}</p>
                                        </div>
                                      </div>
                                    )
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
                            <div className='flex'>
                                <div>
                                    <img src='/src/assets/Images/bi_shop.png' className='w-[28px] h-[28px]'/>
                                    <p className='font-display font-normal text-base text-[#37517E]'>Modern Bisnis</p>
                                </div>
                                <div>
                                      <img src='/src/assets/Images/icomoon-free_lab.png'className='w-[28px] h-[28px]'/>
                                </div>
                                <div>
                                    <img src='/src/assets/Images/cloud-done-outline-rounded.png' className='w-[28px] h-[28px]'/>
                                </div>
                                <div>
                                    <img src='/src/assets/Images/ic_round-gpp-good.png' className='w-[28px] h-[28px]'/>
                                </div>
                            </div>
                       </div>
            </section>
        </main>
    </div>
  )
}

export default Home