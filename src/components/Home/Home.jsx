import React from 'react'
import BannerSection from './BannerSection'
import Category from './Category'
import BestSellingProducts from './BestSellingProducts'
import Suggestfood from './suggestfood'
import BestBrands from './BestBrands'
import Articles from './Articles'

export default function Home() {
  return (
    <>
      <div className='w-full py-10 bg-[#FFF8EE] relative'>
        <div className='px-[1rem] xl:container xl:mx-auto '>
          <section className='BannerSection'>
            <BannerSection />
          </section>
          <section className='Category'>
            <Category />
          </section>
          <section className='BestSellingProducts'>
            <BestSellingProducts />
          </section>

          <section className='Suggestfood w-full '>
            <Suggestfood />
          </section>
          <section className='BestBrands'>
            <BestBrands />
          </section>
          <section className='Articles'>
            <Articles/>
          </section>
        </div>
      </div>
    </>
  )
}
