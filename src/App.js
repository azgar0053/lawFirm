import logo from './logo.svg';
import './App.css';
import Main from './component/MainSection/Main';
import Intro from './component/Intro/Intro';
import WhyChooseUs from './component/WhyChooseUs/WhyChooseUs';
import Practice from './component/PracticeSec/Practice';
import Testimonial from './component/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Main/>
      <Intro/>
      <WhyChooseUs/>
      <Practice/>
      <Testimonial/>
    </div>
  );
}

export default App;
