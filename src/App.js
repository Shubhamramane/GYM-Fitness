import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero';
import Programs from './Component/Program/Program';
import Reason from './Component/Reason/Reason';
import Plans from './Component/Plans/Plans';
import Testimonials from './Component/Testimonial/Testimonials';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
