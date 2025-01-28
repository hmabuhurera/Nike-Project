import React from 'react'
import NikeAppBanner from './component/helloNikeGreatingMesssage'
import HeroSection from './component/heroShoesBannfer'
import HeroSection1 from './component/firstlook'
import FlightEssentials from './component/dontMiss'
import ShoeCart from './component/shoesCart'
import Feature from './component/fearure'
import GearUp from './component/gearUp'
import Essentials from './component/essintail'
import FooterNav2 from './component/Footer2'
import ProductDetail from './productDetail/page'
import { ShoppingBag } from 'lucide-react'
import CheckoutForm from './component/checkOutPage'
import ShoppingCart from './shopingCart/page'






const Home = () => {
  return (
    <main>
      <NikeAppBanner />
      <HeroSection />
      <HeroSection1 />
      <ShoeCart />
      <Feature /> 
      <GearUp />
      <FlightEssentials />
      <Essentials />
      <FooterNav2 />
      
      <ShoppingCart />
      <CheckoutForm />

    </main>
    
  )
}

export default Home