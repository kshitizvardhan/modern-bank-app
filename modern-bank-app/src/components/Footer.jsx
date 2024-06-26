import React from 'react'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        
        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between mt-10 md:mt-0'>
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* To get the divider */}
      <div className='w-full border-t-[1px] border-t-[#3F3E45]'/>

      <div className='flex flex-row mt-6'>
        {socialMedia.map((social, index)=>(
          <a key={social.id} href={social.link}>
            <img src={social.icon} alt="" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`}/>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Footer