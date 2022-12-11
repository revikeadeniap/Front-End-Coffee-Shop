import './../App.css';
import '../assets/css/style.css';


import Navbar from '../components/navbar';
import Header from '../components/dasboard/header';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;

