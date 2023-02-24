import { Link } from 'react-router-dom'
import imagegallery from './imagegallery.module.css'

function Servicepage() {

  return (
    <div>
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

                <div className={imagegallery.gallery}>
                     <div className=''><img src='/src/assets/Images/shopping gallery.jpg' className='h-[100%] object-fill'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery one.jpg' className='h-[100%] object-fill w-[100%]'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery two.jpg' className='h-[100%] object-fill w-[100%]'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery three.jpg' className=' h-[100%] object-fill w-[100%]'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery four.jpg'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery five.jpg' className='h-[100%] object-fill w-[100%]'/></div>
                     <div className=''><img src='/src/assets/Images/shopping gallery six.jpg' className='h-[100%] object-fill'/></div>
                </div>
          </section>

          <section className='business-opportunities bg-[#F3F5FA]'>
               <div className='max-w-[989px] mr-auto ml-auto'>
                     <div className='business-heading flex justify-center'>
                          <div className='heading mt-11'>
                                <h4 className='text-[#37517E] font-bold font-display text-[24px] leading-7 uppercase text-center'>peluang bisnis</h4>
                                <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                                <p className='pt-6 text-center leading-4 font-display text-sm text-[#4F4F4F] font-medium pb-6'>Kami membuka suatu peluang bisnis untuk pelanggan kami dengan fleksibel dari PT. Fazza Beauty Skin. Bergabung dan buatlah suatu jaringan bisnis yang menyenangkan  dengan berbagai macam paket plan yang profitable.</p>
                          </div>
                     </div>
                     <div className='business-card grid grid-cols-2 grid-rows-2 gap-5'>
                          <div className='card-one flex justify-center pr-6 pl-4 bg-white pt-11 pb-4 shadow-[2px_8px_10px_0px_grey]'>
                               <div className='w-[40%]'>
                                    <img src='/src/assets/Images/card one image.svg'/>
                               </div>
                               <div className='w-[60%]'>
                                    <h5 className='text-center font-display leading-4 text-sm text-[#37517E] font-medium'>Manage jam kerja anda</h5>
                                    <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                                    <p className='text-center pt-4 font-display leading-4 text-[12px] text-[#4F4F4F] font-medium'>Anda memiliki kebebasan untuk menjadi bos Anda sendiri dan bekerja di jam Anda yang telah Anda atur sendiri. Bekerja secara paruh waktu atau penuh waktu - itu adalah pilihan Anda.</p>
                               </div>
                          </div>

                          <div className='card-two flex justify-center pr-6 pl-4 bg-white pt-11 pb-4 shadow-[2px_8px_10px_0px_grey]'>
                                <div className='w-[40%]'>
                                     <img src='/src/assets/Images/card two image.svg'/>
                                </div>
                                <div className='w-[60%]'>
                                    <h5 className='text-center font-display leading-4 text-sm text-[#37517E] font-medium'>Produk yang berkualitas</h5>
                                    <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                                    <p className='text-center pt-4 font-display leading-4 text-[12px] text-[#4F4F4F] font-medium'>Produk yang diproduksi sudah dilakukan riset permintaan pasar sehingga anda bisa menjual produk dengan mudah melalui media sosial anda</p>
                                </div>
                          </div>
                          <div className='card-three flex justify-center pr-6 pl-4 bg-white pt-11 pb-4 mb-5 shadow-[2px_8px_10px_0px_grey]'>
                                <div className='w-[40%]'>
                                     <img src='/src/assets/Images/card three image.svg'/>
                                </div>
                                <div className='w-[60%]'>
                                   <h5 className='text-center font-display leading-4 text-sm text-[#37517E] font-medium'>Mentoring bisnis</h5>
                                   <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                                    <p className='text-center pt-4 font-display leading-4 text-[12px] text-[#4F4F4F] font-medium'>Dengan perangkat pendukung dan pelatihan ahli, Anda akan menemukan segalanya di sini untuk membangun bisnis Anda. dengan pelatihan ini anda akan dibimbing melaluli materi yang disediakan sampai bisnis anda pecah telur</p>
                                </div>
                          </div>
                          <div className='card-four flex justify-center pr-6 pl-4 bg-white pt-11 pb-4 mb-5 shadow-[2px_8px_10px_0px_grey]'>
                            <div className='w-[40%]'>
                                  <img src='/src/assets/Images/card four image.svg'/>
                            </div>
                            <div className='w-[60%]'>
                                    <h5 className='text-center font-display leading-4 text-sm text-[#37517E] font-medium'>Tools promosi lengkap</h5>
                                    <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                                    <p className='text-center pt-4 font-display leading-4 text-[12px] text-[#4F4F4F] font-medium'>Dengan adanya website support yang disediakan akan menjadikan bisnis anda menjadi lebih profesional dan meningkatkan traffic untuk penjualan anda</p>
                            </div>
                          </div>
                     </div>

                     <div className='flex items-center mt-4'>
                          <div className='ladder-bg w-[40%]'>
                                <img src='/src/assets/Images/ladder.svg'/>
                          </div>
                          <div className='ladder-title pt-20 w-[60%] pb-16'>
                              <h5 className='font-display leading-6 text-[#37517E] font-semibold text-[1.8vw] pb-5'>Sukses karena berbisnis</h5>
                              <p className='text-[#524A4E] font-display font-medium text-sm'>PT. Fazza Beauty Skin bukan sekedar bisnis biasa pada umumnya. Dengan produk yang kami ciptakan anda dapat mencapai impian anda menjadi sukses dan meningkatkan kesadaran hidup sehat dan sejahtera. Buatlah suatu perubahan dala hidup anda mulai sekarang dan ajak orang-orang sekitar untuk membantu meningkatkan kehidupan mereka.</p>
                          </div>
                     </div>
               </div>
          </section>

          <section className='plan'>
                  <div className='max-w-[987px] mr-auto ml-auto'>
                         <div className='text-center mt-10'>
                              <div className='mb-4'>
                                   <h6 className='font-display leading- font-bold text-[24px] text-[#37517E] uppercase'>paket join</h6>
                                   <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[136px] ml-auto mr-auto'></hr>
                              </div>

                               <div className='pt-1'>
                                   <p className='font-display text-sm font-normal leading-4'>Dibutuhkan rasa sakit yang luar biasa untuk mendapatkan manfaat. Kebutuhannya dihasilkan dari sesuatu yang benar-benar membuatnya menjauh. Biarkan mereka menjadi apa yang mereka inginkan. Siapapun yang diinginkan siapapun. Dan tidak ada orang yang menghalangi menerima yang lain. Karena dia harus melarikan diri di kantor kenyamanan ini, yang ada di sini.</p>
                               </div>
                         </div>

                         <div className='card-plan mt-6 flex justify-around gap-6'>
                              <div className='card-one pl-9 shadow-[2px_8px_10px_0px_grey] pt-20 pr-24'>
                                  <h7 className='font-display text-sm font-bold leading-5 text-[#37517E] pb-1'>Free Plan</h7><br></br>
                                  <span className='font-display text-[36px] leading-10 font-light'>$</span><span className='font-display text-[40px] font-bold leading-8 text-[#37517E]'>0</span>
                                  <p className='text-[#47B2E4] leading-4 text-sm font-display mt-1'>packet set</p>
                                  <div className='plan-details pt-7 pb-8'>
                                          <ul>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Quam adipiscing vitae proin</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/cross.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 line-through text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/cross.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 line-through text-[10px]'>Pharetra massa massa ultricies</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/cross.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 line-through text-[10px]'>Pharetra massa massa ultricies</span></li>
                                          </ul>
                                   </div>
                                   <div className='button-mulai pb-20'>
                                  <button className='bg-[#47B2E4] rounded-[57px] pb-2 pt-2 px-9 py-9 text-[#fff]'>Mulai</button>
                                  </div>
                              </div>
                              <div className='card-two pl-9 shadow-[2px_8px_10px_0px_grey] pt-20 pr-24'>
                                  <h7 className='font-display text-sm font-bold leading-5 text-[#37517E] pb-1 uppercase'>Business Plan</h7><br></br>
                                  <span className='font-display text-[36px] leading-10 font-light'>$</span><span className='font-display text-[40px] font-bold leading-8 text-[#37517E]'>0</span>
                                  <p className='text-[#47B2E4] leading-4 text-sm font-display mt-1'>packet set</p>
                                  <div className='plan-details pt-7 pb-8'>
                                          <ul>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Quam adipiscing vitae proin</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Pharetra massa massa ultricies</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Pharetra massa massa ultricies</span></li>
                                          </ul>
                                   </div>
                                   <div className='button-mulai pb-20'>
                                  <button className='bg-[#47B2E4] rounded-[57px] pb-2 pt-2 px-9 py-9 text-[#fff]'>Mulai</button>
                                  </div>
                              </div>
                              <div className='card-three pl-9 shadow-[2px_8px_10px_0px_grey] pt-20 pr-24'>
                                   <h7 className='font-display text-sm font-bold leading-5 text-[#37517E] pb-1'>Developer Plan</h7><br></br>
                                   <span className='font-display text-[36px] leading-10 font-light'>$</span><span className='font-display text-[40px] font-bold leading-8 text-[#37517E]'>0</span>
                                   <p className='text-[#47B2E4] leading-4 text-sm font-display mt-1'>packet set</p>
                                   <div className='plan-details pt-7 pb-8'>
                                          <ul>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Quam adipiscing vitae proin</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Nec feugiat nisl pretium</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Pharetra massa massa ultricies</span></li>
                                             <li className='flex items-center'><img src='/src/assets/Images/right icon.png' className='w-[1rem] h-[1rem]'/><span className='text-[#7D7C7C] font-display font-normal leading-3 text-[10px]'>Pharetra massa massa ultricies</span></li>
                                          </ul>
                                   </div>
                                  <div className='button-mulai pb-20'>
                                  <button className='bg-[#47B2E4] rounded-[57px] pb-2 pt-2 px-9 py-9 text-[#fff]'>Mulai</button>
                                  </div>
                              </div>
                         </div>
                  </div>
          </section>
    </div>
  
  )
}

export default Servicepage