import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Frequentlyaskequestion() {

    const[displayAccordin, setAccordin] = useState(false)
    const faqdetail = [
        {
          image:'/src/assets/Images/question.png',
          title: "Apakah itu tidak akan diikuti oleh was for tapi tempat tidur guci dua?",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          image:'/src/assets/Images/question.png',
          title: "Apakah cokelat penyakit yang paling populer saat ini?",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        { 
          image:'/src/assets/Images/question.png',
          title: "Apakah itu sakit di pantat?",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            image:'/src/assets/Images/question.png', 
            title: "Saatnya anak-anak makan salad dan salad?",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          },
          { 
            image:'/src/assets/Images/question.png',
            title: "Mahkota kehidupan murni menghiasi langit-langit mulut?",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          }
      ]
      console.log(faqdetail)
    
      const accordinfaq = () =>{
        console.log(`it's working`)
        setAccordin(!displayAccordin)
      }
  return (
    <div>
        <section className='bg-[#F3F5FA] mt-9'>
              <div className='max-w-[987px] mr-auto ml-auto'>
                  <div className='faq-title pt-14 flex flex-col items-center'>
                      <div className='faq-heading'>
                           <h8 className='font-display font-bold text-[2rem] text-[#37517E] leading-7 uppercase'>PERTANYAAN YANG SERING DIAJUKAN</h8>
                           <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[10vw] ml-auto mr-auto'></hr>
                      </div>
                      <div className='mt-3'>
                            <p className='text-center font-display leading-4 text-sm font-normal text-black'>Dibutuhkan rasa sakit yang luar biasa untuk mendapatkan manfaat. Kebutuhannya dihasilkan dari sesuatu yang benar-benar membuatnya menjauh. Biarkan mereka menjadi apa yang mereka inginkan. Siapapun yang diinginkan siapapun. Dan tidak ada orang yang menghalangi menerima yang lain. Karena dia harus melarikan diri di kantor kenyamanan ini, yang ada di sini.</p>
                      </div>
                  </div>

                  <div className='faq-accordin mt-6 pb-12'>
                  <div className='accordin-div'>
                                 {
                                  faqdetail.map((accordin) =>{
                                    return (
                                      <div className='' key={accordin.id}>
                                       <div className='flex justify-between items-center bg-white mb-2 pl-4 pr-4 px-4 py-4'>
                                           <div className='flex'>
                                           <img src={accordin.image} className='w-[1rem] mr-3'/>
                                           <p className='font-display font-medium text-[#37517E] leading-4'>{accordin.title}</p>
                                           </div>
                                           <div>
                                             <button onClick={accordinfaq}><KeyboardArrowDownIcon /></button>
                                       </div>
                                       </div>
                                       <div style={{display : displayAccordin ? 'block' : 'none'}}>
                                           <p className='pt-4 pb-4 font-display font-normal'>{accordin.content}</p>
                                        </div>
                                      </div>
                                    )
                                  })
                                 }
                             </div>
                  </div>
              </div>
        </section>

        <section className='contact-us pt-6'>
            <div className='max-w-[983px] mr-auto ml-auto'>
                  <div className='contact-us-title-section flex flex-col items-center mb-9'>
                     <div className='contact-title mb-3'>
                          <h9 className='text-center text-[#37517E] font-display font-bold leading-7 text-[1.6rem]'>kontak</h9>
                          <hr className='mt-2 divide-x-2 border-2 border-[#47B2E4] border-solid w-[3vw] ml-auto mr-auto'></hr>
                     </div>
                     <div className='text-center'>
                           <p className='text-center font-display leading-4 text-sm font-normal'>Dibutuhkan rasa sakit yang luar biasa untuk mendapatkan manfaat. Kebutuhannya dihasilkan dari sesuatu yang benar-benar membuatnya menjauh. Biarkan mereka menjadi apa yang mereka inginkan. Siapapun yang diinginkan siapapun. Dan tidak ada orang yang menghalangi menerima yang lain. Karena dia harus melarikan diri di kantor kenyamanan ini, yang ada di sini.</p>
                     </div>
                  </div>
                  
             </div>

             <div className='form-map max-w-[983px] mr-auto ml-auto flex pb-14 gap-7'>
                <div className='map shadow-[2px_8px_10px_0px_grey] px-9 py-9'>
                      <div className='location flex items-center mb-7'> 
                          <div className='location-icon'>
                            <img src='/src/assets/Images/location.svg'/>
                          </div>
                          <div className='heading ml-5'>
                             <h9 className='font-display leading-5 text-[1rem] font-medium text-[#37517E] ml-1'>Lokasi :</h9>
                             <p className='font-display text-[10px] font-medium leading-3 text-[#6A94DD] ml-1'>Jl. Timor Timur E 6 C, Desa/Keluarahan Siduandi, Kec. Mlati, Kab. Sleman, Provinsi Daerah Istimewa Yogyakarta. </p>
                          </div>
                      </div>
                        <div className='email-div flex items-center mb-7'>
                         <div className='email'>
                          <img src='/src/assets/Images/email.svg'/>
                         </div>
                      <div className='email-details'>
                          <h9 className='font-display leading-5 text-[1rem] font-medium text-[#37517E] ml-1'>Email</h9>
                          <p className='font-display text-[10px] font-medium leading-3 text-[#6A94DD] ml-1'>fazzaskin.id@gmail.com</p>
                          </div>
                         </div>
                      <div className='telephone flex items-center mb-7'>
                            <div>
                                <img src='/src/assets/Images/telephone.svg'/>
                            </div>
                            <div className='telephone-heading'>
                                  <h9 className='font-display leading-5 text-[1rem] font-medium text-[#37517E] ml-1'>Telepon :</h9> 
                                  <p className='font-display text-[10px] font-medium leading-3 text-[#6A94DD] ml-1'>+62 8132 3456 7890</p>
                            </div>
                      </div>
                  </div>
                  <div className='form shadow-[2px_8px_10px_0px_grey]'>
                       <div className='grid px-9 py-9'>
                            <form>
                                <div className='flex items-center justify-center gap-4 mb-8'>
                                     <div className='firstname'>
                                         <label className='font-display text-[#7D7C7C] font-medium text-sm leading-4 pb-1'>Nama Kamu</label>
                                           <input className='border-2 rounded'/>
                                        </div>
                                      <div className='email'>
                                        <label className='font-display text-[#7D7C7C] font-medium text-sm leading-4 pb-1'>Email Kamu</label>
                                           <input className='border-2 rounded'/>
                                     </div>
                                </div>

                                <div className='Subject'>
                                 <label className='font-display text-[#7D7C7C] font-medium text-sm leading-4 pb-1'>Subjek</label>
                                   <input className='border-2 rounded w-[100%] border-[1px solid #7D7C7C]'/>
                                </div>
                                <div className='grid mt-8'>
                                <label className='font-display text-[#7D7C7C] font-medium text-sm leading-4 pb-1'>Pesan</label>
                                    <textarea className='border-2 rounded w-[100%] border-[1px solid #7D7C7C] pt-8 pb-8'></textarea>
                                </div>
                               <div className='flex justify-center mt-8 mb-12'>
                               <button className='bg-[#47B2E4] rounded-full border-2 px-11 py-11 pt-3 pb-3 text-white font-display leading-4 font-normal'>Kirim Pesan</button>
                               </div>
                            </form>
                       </div>
                  </div>
             <div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Frequentlyaskequestion