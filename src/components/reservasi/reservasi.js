function reservasi() {
    return (
<section class="contact" id="contact">

    <h1 class="heading"> <span>contact</span> us </h1>

    <div class="row">

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2933998324297!2d111.65628111415154!3d-7.542947476553589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c732d7ff54b5%3A0xc90228724d04665b!2sBalcony%20Coffee!5e0!3m2!1sid!2sid!4v1670315177158!5m2!1sid!2sid" allowfullscreen="" loading="lazy"></iframe>

        <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="name"></input>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="text" placeholder="nomor telepon"></input>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="nomor meja"></input>
            </div>
            <a href="https://wa.me/+6282139897487" class="btn">contact now</a>
        </form>

    </div>

</section>

);
}

export default reservasi;