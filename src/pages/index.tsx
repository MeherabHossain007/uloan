import { Inter } from '@next/font/google'
import Layout from './layout/Layout'
import NavBar from './layout/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <Layout>
          <NavBar/>
        </Layout>
      </main>
    </>
  )
}
