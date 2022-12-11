import './../App.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar';
import Pesanan from '../components/pesanan/pesanan2';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pesanan/>
      <Footer/>
    </div>
  );
}

export default App;