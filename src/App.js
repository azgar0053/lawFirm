import './App.css';
import Main from './component/MainSection/Main';
import Intro from './component/Intro/Intro';
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs';
import Practice from './component/PracticeSec/Practice';
import Testimonial from './component/Testimonial/Testimonial';
import OurTeam from './component/OurTeam/OurTeam';
import Faq from './component/Faq/Faq'
import NewsLetter from './component/NewsLetter/NewsLetter';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <Intro/>
      <WhyChooseUs/>
      <Practice/>
      <Testimonial/>
      <OurTeam/>
      <Faq/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
