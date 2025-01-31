import Header from '@/pages/component/Header';
import Home from './component/Home';
import Services from './component/Services';
import Logo from './component/Logo';
import Portfolio from './component/Portfolio';
import Achievement from './component/Achievement';
import Testimonial from './component/Testimonial';
import Journal from './component/Journal';
import Contact from './component/Contact';
import Footer from './component/Footer';

export default function OnePage() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Logo />
      <Portfolio />
      <Achievement />
      <Testimonial />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
}