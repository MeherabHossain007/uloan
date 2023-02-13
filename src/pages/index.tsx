import { Inter } from '@next/font/google'
import Layout from './layout/Layout'
import NavBar from './layout/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className="md:container md:mx-auto font-titillium">
      <section className=' text-black'>
        <NavBar/>
      </section>
      </main>
    </Layout>
  )
}
