/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Cursor from './components/Cursor';
import Hero from './components/Hero';
import InitialScan from './components/InitialScan';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative bg-cold-white selection:bg-klein selection:text-white">
      <div className="hidden md:block">
        <Cursor />
      </div>
      <Hero />
      <InitialScan />
      <Showcase />
      <Footer />
    </main>
  );
}

