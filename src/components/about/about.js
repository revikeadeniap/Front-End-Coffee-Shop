import img from '../../assets/images/about-img.jpeg';

function about() {
    return (

        <section class="about" id="about">
        
            <h1 class="heading"> <span>about</span> us </h1>
        
            <div class="row">
        
                <div class="image">
                    <img src={img} alt=""></img>
                </div>
        
                <div class="content">
                    <h3>what makes our coffee special?</h3>
                    <p>Kopi kami dibuat khusus oleh Barista kami, yang keahliannya mengidentifikasi karakteristik terbaik dari setiap kopi untuk menciptakan campuran yang beraroma dan aromatik. Setiap kopi menghasilkan kombinasi yang ideal tidak seperti campuran lainnya. Tujuan kami adalah untuk menciptakan kopi yang menarik dan disesuaikan dengan selera lidah indonesia. Inilah inovasi kopi yang terbaik dari kami! Bagi kalian yang mencari kopi yang unik atau bernostalgia, andalkan pilihan rasa dari kopi kami untuk menghadirkannya kepada Anda.</p>
                    <p>Kami punya kopi untuk mengingatkan Anda tentang setiap musim; liburan, gurun, dan konpeksi yang kita semua kenal dan cintai. Kami tahu bahwa kenangan itu penting bagi Anda dan kami ingin mengabadikan momen itu dengan setiap tegukan dari kopi kami. Jadi lakukan perjalanan menyusuri jalan kenangan atau nikmati rasa favorit Anda dengan sekumpulan Kopi Rasa kami.</p>
                </div>
        
            </div>
        
        </section>
    );
  }
  
  export default about;