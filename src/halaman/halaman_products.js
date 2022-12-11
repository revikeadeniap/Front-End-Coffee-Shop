import './../App.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar';
import Produk from '../components/products/products'
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Produk/>
      <Footer/>
    </div>
  );
}

export default App;