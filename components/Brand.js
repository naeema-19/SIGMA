import React from "react"
import { Title, TitleLogo } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Partners' />
          </div>
          <div className="text-center">
            <TitleLogo title='To be updated...' />
          </div>
          <div className='brand-content grid-6 py'>
            {/*{brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </div>
            ))}*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
