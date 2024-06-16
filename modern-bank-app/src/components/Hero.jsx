import React from 'react'
import styles from '../style.js'
import {robot, discount} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`px-6 flex-1 flex-col ${styles.flexStart} sm:px-16 xl:px-0`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for {" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="hidden sm:block"/> {" "}
            <span className="text-gradient">
              Generation
            </span> {" "}
            {/* We could have added the "Payment Method." here but accoridng to design the getStarted component won't position correctly with this, so add this as a div below the div which is flex-col */}
          </h1>
          <div className="hidden mr-0 ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br />
        We examine annual percentage rates, annual fees.
        </p>
        {/* Completed with the left side of Hero Section */}
      </div>
      {/* Right Side Begins */}

      <div className={`${styles.flexCenter} flex flex-1 my-10 relative md:my-0`}>
        <img src={robot} alt="cards levitating on a robot's hand" className="w-[100%] h-[100%] relative z-[5]"/>
        {/* According to the figma design
        The things here which is missing is the gradients which are visible below the image, which actually makes the image look like the cards are poppin up 
        For that, we need to create some self closing divs which will shows us the gradients...  */}
        <div className=" absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className=" absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      {/* Rendering this component here for the small devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero