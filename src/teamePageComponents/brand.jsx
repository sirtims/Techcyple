import './brand.css'
import { motion } from 'framer-motion'
const slideUpVariant = {
   hidden: {
      y: '70px',
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.6,
         ease: 'easeOut',
      },
   },
};
const Brand = () => {
   return (
      <section className='brand'>
         <motion.h1
            variants={slideUpVariant}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
         >Brands Trust Us</motion.h1>
         <div className="brand_inner_wrapper">
            <img className='item item1' src="/images/brand_logo1.jpg" alt="" />
            <img className='item item2' src="/images/brand_logo2.jpg" alt="" />
            <img className='item item3' src="/images/brand_logo3.webp" alt="" />
            <img className='item item4' src="/images/brand_logo4.jpeg" alt="" />
            <img className='item item5' src="/images/brand_logo5.jpg" alt="" />
            <img className='item item6' src="/images/brand_logo6.jpg" alt="" />
            <img className='item item7' src="/images/brand_logo7.jpg" alt="" />
            <img className='item item8' src="/images/brand_logo8.jpg" alt="" />
            <img className='item item9' src="/images/brand_logo9.jpg" alt="" />
         </div>
      </section>
   )
}

export default Brand
