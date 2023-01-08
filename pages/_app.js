import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>Metaverse Marketplace</p>
        <div className='flex mt-4'>
          <Link href="/">
            <a className='mr-6 text-blue-500 font-bold'>Home</a>
          </Link>
          <Link href="/create-item">
            <a className='mr-6 text-blue-500 font-bold'>Sell Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className='mr-6 text-blue-500 font-bold'>My Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className='mr-6 text-blue-500 font-bold'>Creator Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
