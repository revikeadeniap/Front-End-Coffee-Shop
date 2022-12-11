import './../App.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar';
import Reservasi from '../components/reservasi/reservasi';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Reservasi/>
      <Footer/>
    </div>
  );
}

export default App;