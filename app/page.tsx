import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedPosts from '@/components/FeaturedPosts'
import WhyUs from '@/components/WhyUs'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedPosts />
      <WhyUs />
      <Newsletter />
      <Footer />
    </main>
  )
}
