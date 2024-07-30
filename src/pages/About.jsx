import { Fragment } from 'react'
// components
import BrandLink from '../components/BrandLink'
import Services from '../components/Services'

const About = () => {
  return (
    <Fragment>
      <div className='relative my-20 px-8 flex justify-center items-center'>
        <BrandLink classes={"xl:text-4xl md:text-2xl text-xl"} />
      </div>
      <div className="py-10 font-bold">
        <div className="mx-auto w-2/3 text-center">
          <p >Parfume Nest is a premier online destination for fragrance enthusiasts, offering a curated selection of the finest perfumes from around the world.
            At Parfume Nest, we believe that a scent is more than just a fragrance; it's a personal statement, an extension of one's identity. Our collection features an exquisite range of scents, from timeless classics to contemporary masterpieces, catering to every preference and occasion.
            We are dedicated to providing our customers with an unparalleled shopping experience, combining luxury, quality, and convenience.
          </p>
          <br />
          <p>
            Our commitment to excellence extends beyond our product offerings. At Parfume Nest, we pride ourselves on exceptional customer service, ensuring that each client finds their perfect fragrance.
            Our knowledgeable team is passionate about perfumery and is always ready to offer personalized recommendations and expert advice.
            With secure online shopping, fast shipping, and a satisfaction guarantee, Parfume Nest is your trusted partner in the journey to discover and indulge in the world of fragrances.
          </p>
        </div>
      </div>
      <Services />
      <div className="mx-auto w-3/4 text-center flex flex-col justify-center items-center my-8 flex-wrap">
        <span className='font-bold font-krona my-4'>Imprint</span>
        <p>Parfume Nest Inc. Parfume-Street 7-11 40235 Parfumeland</p>
        <p>You can reach us by email at: adrian.cealic@gmail.com. Our deliveries go out every Sunday evening so you can get them as early in the week as possible</p>
      </div>
    </Fragment>
  )
}

export default About
