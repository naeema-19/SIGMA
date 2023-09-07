import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='SBC MACE' caption='IEEE SPS ' className='logobg' />
          <div className='sub-heading'>
            <TitleSm title='presents' />
          </div>
          <h1 className='hero-title'>SIGMA</h1>

          <div className='sub-heading'>
            <TitleSm title='Signal Processing Innovations and Growth through Mentorship Activities' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='About SIGMA' />
            <p>SIGMA (Signal Processing Innovations and Growth through Mentorship Activities) is a flagship event organized by the
                IEEE Signal Processing Society Student Chapter of IEEE MACE SB in collaboration with loT Club MACE. <br /><br />
                Our main objectives are :</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      {/*<Banner />
      <Testimonial />*/}
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Talk Sessions' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
