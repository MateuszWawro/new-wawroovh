import HomeHero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeHighlights from '@/components/HomeHighlights';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <HomeHighlights />
      <Footer />
    </main>
  );
}