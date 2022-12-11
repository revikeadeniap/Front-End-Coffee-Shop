import img1 from './../../assets/images/pic-1.jpeg';
import img2 from './../../assets/images/pic-2.jpeg';
import img3 from './../../assets/images/pic-3.jpg';
import img_quote from './../../assets/images/quote-img.png';

function owner() {
    return (
<section class="review" id="review">

    <h1 class="heading"> Owner's </h1>

    <div class="box-container">

        <div class="box">
            <img src={img_quote} alt="" class="quote"></img>
            <p>"Secangkir kopi hitam penuh makna yang mengingatkanku bahwa semanis apapun hidup, rasa pahit akan selalu ada"</p>
            <img src={img1} class="user" alt=""></img>
            <h3>Revike Adenia Prahadany</h3>
        </div>

        <div class="box">
            <img src={img_quote} alt="" class="quote"></img>
            <p>"Keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari"</p>
            <img src={img2} class="user" alt=""></img>
            <h3>Suci Izzati</h3>
        </div>
        
        <div class="box">
            <img src={img_quote} alt="" class="quote"></img>
            <p>"Terinspirasi dari secangkir kopi, bahwa dia tak pernah dusta atas nama rasa. Kopi punya cerita, hitam tak selalu kotor, pahit tak harus sedih"</p>
            <img src={img3} class="user" alt=""></img>
            <h3>Syahharbanu</h3>
        </div>

    </div>

</section>

);
}

export default owner;