import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection/Hero'
import Footer from '@/components/Footer'
import AnalyticsSection from '@/components/SubHeroSection/AnalyticsSection'
import PropertiesSection from '@/components/PropertySection/PropertiesSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import IntroSection from '@/components/SubHeroSection/IntroSection'
import FeedbackSection from '@/components/FeedbackSection/FeedbackSection'

export default function Page() {
  return (
    <>
      <main className='bg-bg-sheet '>
        <Hero />

        <Navbar />
        <section id='analytics'>
          <AnalyticsSection />
          <IntroSection />
        </section>
        <section id="properties">
          <PropertiesSection />
        </section>
        <section>
          <FeedbackSection />
        </section>
        <section>
          <ContactSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
