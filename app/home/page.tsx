import FeaturedProductComponent from '@/components/FeaturedProductComponent'
import ChairGallery from '@/components/GalleryComponent'
import Logos from '@/components/logos'
import FurnitureCollection from '@/components/section1'
import React from 'react'

export default function Home() {
  return (
    <div className='px-4 md:pl-56 md:pr-36 flex-col flex '>
      <FurnitureCollection />
      <Logos/>
      <FeaturedProductComponent/>
    < ChairGallery/>
    </div>
  )
}
