import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Brands } from '@/components/brands'
import { Achievements } from '@/components/achievements'
import { Testimonials } from '@/components/testimonials'


export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Brands />
      <Achievements />
      <Testimonials />
    </>
  )
}