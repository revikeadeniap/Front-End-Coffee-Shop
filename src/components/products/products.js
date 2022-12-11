import img1 from './../../assets/images/product-1.jpg';
import img2 from './../../assets/images/product-2.jpg';
import img3 from './../../assets/images/product-3.jpg';

function produk() {
    return (
        <section class="products" id="products">
        
            <h1 class="heading"> our <span>products</span> </h1>
        
            <div class="box-container">
        
                <div class="box">
                    <div class="image">
                        <img src={img1} alt=""></img>
                    </div>
                    <div class="content">
                        <h3>peaberry coffee</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="price">Rp.50.000,00</div>
                    </div>
                </div>
        
                <div class="box">
                    <div class="image">
                        <img src={img2} alt=""></img>
                    </div>
                    <div class="content">
                        <h3>flores bajawa coffee</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="price">Rp.35.000,00</div>
                    </div>
                </div>
        
                <div class="box">
                    <div class="image">
                        <img src={img3} alt=""></img>
                    </div>
                    <div class="content">
                        <h3>tiam coffee</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="price">Rp.45.000,00</div>
                    </div>
                </div>
        
            </div>
        
        </section>

    );
}

export default produk;