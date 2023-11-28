import Image from 'next/image'
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar';
const minimatch = require('minimatch');
import fetch, {Headers} from 'node-fetch'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mx-auto px-12 py-4"><HeroSection/> </div> 
    </main>
  )
}
