import './../App.css';
import '../assets/css/style.css';


import Navbar from '../components/navbar';
import About from '../components/about/about';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

