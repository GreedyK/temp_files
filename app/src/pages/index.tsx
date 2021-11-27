import Header from '@/components/sections/Header'
import FirstView from '@/components/sections/FirstView'
import Situation from '@/components/sections/Situation'
import Benefit from '@/components/sections/Benefit'
import Feature from '@/components/sections/Feature'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import UsageIntroductions from '@/components/sections/UsageIntroductions'
import Company from '@/components/sections/Company'
import Contactform from '@/components/sections/ContactForm'
import { useState } from 'react'
import Overlay from '@/components/atoms/Overlay'

const Home = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="
      min-h-screen
      p-0
      flex
      flex-col
      justify-center
      align-center
    ">
      <Header />
      <main className="
        p-0
        flex-1
        flex
        flex-col
        justify-center
        align-center
        w-full
        bg-asagao-device-zoom
        bg-contain
        bg-no-repeat
        bg-fixed
      ">
        <FirstView />
        <Situation />
        <Benefit />
        <Feature />
        <UsageIntroductions />
        <FAQ />
        <Contactform />
        <Company />
      </main>
      <Footer />
    </div>
  )
}

export default Home
