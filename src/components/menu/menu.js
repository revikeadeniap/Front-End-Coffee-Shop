
import img1 from './../../assets/images/menu-1.png';
import img2 from './../../assets/images/menu-2.png';
import img3 from './../../assets/images/menu-3.png';
import img4 from './../../assets/images/menu-4.png';
import img5 from './../../assets/images/menu-5.png';
import img6 from './../../assets/images/menu-6.png';


function menu() {
    return (

        <section class="menu" id="menu">

        <h1 class="heading"> our <span>menu</span> </h1>
    
        <div class="box-container">
    
            <div class="box">
                <img src={img1} alt=""></img>
                <h3>Coffee Latte</h3>
                <div class="price">Rp.15.000,00 <span>Rp.18.000,00</span></div>
                <a href="pesanan" class="btn">Choose</a>
            </div>
    
            <div class="box">
                <img src={img2} alt=""></img>
                <h3>Vanilla Latte</h3>
                <div class="price">Rp.18.000,00</div>
                <a href="pesanan2" class="btn">Choose</a>
            </div>
    
            <div class="box">
                <img src={img3} alt=""></img>
                <h3>Hazelnut Latte</h3>
                <div class="price">Rp.15.000,00 <span>Rp.19.000,00</span></div>
                <a href="pesanan" class="btn">Choose</a>
            </div>
    
            <div class="box">
                <img src={img4} alt=""></img>
                <h3>Caramell Latte</h3>
                <div class="price">Rp.17.000,00 <span>Rp.19.000,00</span></div>
                <a href="pesanan" class="btn">Choose</a>
            </div>
    
            <div class="box">
                <img src={img5} alt=""></img>
                <h3>Chocolate Coffee</h3>
                <div class="price">Rp.20.000,00</div>
                <a href="pesanan" class="btn">Choose</a>
            </div>
    
            <div class="box">
                <img src={img6} alt=""></img>
                <h3>Choco Cheese</h3>
                <div class="price">Rp.20.000,00</div>
                <a href="pesanan" class="btn">Choose</a>
            </div>
    
        </div>
    
    </section>
    
    );
  }
  
  export default menu;