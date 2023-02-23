import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
       <footer className='bg-[#F3F5FA]'>
           <div className='pt-9 max-w-[983px] ml-auto mr-auto pb-16'>
               <div className='footer-main flex items-center justify-between'>
                    <div className='footer-logo'>
                        <div>
                        <img src='/src/assets/Images/footerlogo.svg'/>
                        </div>
                        <div className='pt-4'>
                        <p className='font-display text-sm leading-4 font-normal text-[#7D7C7C]'>Jl. Timor Timur E 6 C, Desa/Keluarahan <br></br>Siduandi, Kec. Mlati, Kab. <br></br>Sleman, Provinsi Daerah Istimewa Yogyakarta. </p>
                        </div>
                        <div className='emailandphone pt-5'>
                           <div className='flex items-center'>
                              <p className='text-[#37517E] font-semibold font-display text-sm'>Phone:<span className='pl-2 font-display text-sm leading-4 font-normal text-[#7D7C7C]'>+62 8132 3456 7890</span></p>
                           </div>
                           <div className='flex items-center'>
                           <p className='text-[#37517E] font-semibold font-display text-sm'>Email:<span className='pl-2 font-display text-sm leading-4 font-normal text-[#7D7C7C]'>fazzaskin.id@gmail.com</span></p>
                           </div>
                        </div>
                    </div>
                    <div className='footer-links'>
                          <Link to='/useful' className='text-[#37517E] font-display text-sm font-semibold leading-5'>Useful Links</Link>
                          <div>
                                <ul>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/><p classname='font-display text-sm leading-4 font-normal text-[#7D7C7C]'>Beranda</p></li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/><p classname='font-display text-sm leading-4 font-normal text-[#7D7C7C]'>Tentang Kami</p></li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/><p classname='font-display text-sm leading-4 font-normal text-[#7D7C7C]'>Produk</p></li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/><p classname='font-display text-sm leading-4 font-normal text-[#7D7C7C]'>Peluang Bisnis</p></li>
                                </ul>
                          </div>
                    </div>
                    <div>
                    <ul>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/>Beranda</li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/>Tentang Kami</li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/>Produk</li>
                                    <li className='flex items-center gap-3'><img src='/src/assets/Images/footer arrow.svg'/>Peluang Bisnis</li>
                                </ul>
                    </div>
                    <div>
                         <h10>Jejaring Sosial Kami</h10>
                         <p className='pr-4'>Tomorrow fermentum hate eu feugiat lide <br></br>par naso tierra videa magna derita valies</p>
                         <div className='social-media-logo flex items-center mt-5 gap-4'>
                          <img src='/src/assets/Images/twitter.png' className='w-[26px] h-[26px]'/>
                          <img src='/src/assets/Images/facebook.png' className='w-[26px] h-[26px]'/>
                          <img src='/src/assets/Images/instagram.png' className='w-[26px] h-[26px]'/>
                          <img src='/src/assets/Images/linkedin.png' className='w-[26px] h-[26px]'/>
                         </div>
                    </div>
               </div>
           </div>
       </footer>
       <div className='bg-[#37517E] px-7 py-7'>
         <p className='text-center text-white text-sm font-display font-normal leading-4'>© Copyright Fazza Beauty. All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer