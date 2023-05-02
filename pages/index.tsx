import { Urbanist } from 'next/font/google'
import { Navbar } from '@/components'

const urbanist = Urbanist({
  subsets: ['latin']
})

const Home = () => {
  return (
    <main className={urbanist.className}>
      <Navbar />
    </main>
  )
}

export default Home
