/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Ecosystem from './components/Ecosystem';
import Team from './components/Team';
import Gallery from './components/Gallery';
import { CoverFlowCarousel } from './components/ui/3-d-coverflow-carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#A71920] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Ecosystem />
        <Team />
        <Gallery />
        <CoverFlowCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
