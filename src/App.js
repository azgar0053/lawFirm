import './App.css';
import Main from './component/MainSection/Main';
import Intro from './component/Intro/Intro';
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs';
import Practice from './component/PracticeSec/Practice';
import Testimonial from './component/Testimonial/Testimonial';
import OurTeam from './component/OurTeam/OurTeam';
import Faq from './component/Faq/Faq'

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
    </div>
  );
}

export default App;
