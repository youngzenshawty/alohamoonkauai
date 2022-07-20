import type { NextPage } from 'next'

import gsap from 'gsap'
import { Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Options from '../components/Options'
import Intro from '../components/Intro'
gsap.registerPlugin(ScrollTrigger)

const Home: NextPage = () => {

  const headerRef = useRef(null)
  const optionsRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    const TriggerEL = optionsRef.current;
    gsap.to(el, {y: -100, duration: 0.75 , scrollTrigger: {
      trigger: TriggerEL,
      start: 'bottom bottom',

      toggleActions: 'play pause resume reverse',
    }})
    
   
  }, [])


  return (
    <div className="flex flex-col bg-off-white max-w-full min-w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap" rel="stylesheet" />

        
      </Head>

     
     <div className="">
      <div ref={headerRef} className='border-b bg-off-white border-black sticky top-0 z-50'>
      <Header />
      </div>

      <div className="border-b border-black">
      <Hero />

    <div ref={optionsRef}>
      <Options />
    </div>

    <Intro />
      </div>
     </div>

     <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden h-14 w-14 rounded-full p-3 bg-black fixed bottom-8 right-8" viewBox="0 0 20 20" fill="white">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg>
      </div>
  )
}

export default Home
