import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='' /> <br />
            <br />
            <Title title='' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='About SIGMA' />
              <p className='desc-p'>SIGMA (Signal Processing Innovations and Growth through Mentorship Activities) is a flagship event organized by the
                IEEE Signal Processing Society Student Chapter of IEEE MACE SB in collaboration with loT Club MACE.</p>
              {/*<div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
  </div>*/}
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Objective' />
              <br />
              <p className='misson-p'><b>Explore Emerging Technologies :</b> SIGMA aims to provide exposure to emerging technologies in signal processing,
such as Computer Vision, Audio and Image Processing, AR/VR, AI, ML etc. Through workshops and hands-on training
sessions, participants will gain practical skills and knowledge in these domains.<br /><br />
<b>Skill Development and Mentorship : </b>We believe in fostering skill development through mentorship. Participants will have
the opportunity to work closely with mentors who will guide and support them in their learning journey. This mentorship
will enable them to apply their newly acquired skills to real-world problems.<br /><br />
<b>Talk Sessions : </b>Our talk sessions, led by industry experts and academicians, will delve into the latest trends and
advancements in signal processing. Participants will gain a deeper understanding of the significance and possibilities of
signal processing in various domains.<br /><br />
<b>Membership Development :</b> SIGMA aims to attract new members and strengthen the Signal Processing Society by
creating awareness of the exclusive opportunities and resources available to SPS members. By showcasing the benefits
of being a part of the society, we aim to encourage more students to join and contribute to the field.<br />

</p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
