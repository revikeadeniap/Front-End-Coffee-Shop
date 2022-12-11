import './../App.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar';
import Menu from '../components/menu/menu';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;