import img1 from './../../assets/images/menu-1.png';
import img2 from './../../assets/images/menu-2.png';
import { BsPlusSquare } from 'react-icons/bs';
import header from '../dasboard/header';

    const shoot = (a) => {
      alert(a);
    }

function pesanan() {
    return (
<section class="contact" id="contact">

    <h1 class="heading"> <span>Pesanan</span> Anda </h1>
   
    <div class="row">
            <h2 className='text-white fs-1 fw-blod py-5'>Detail Pesanan</h2>   
                <div className='col-6'>
                    <div className='p-3 outline'>
                        <img className='py-5' style={{ width: 200}} src={img1} alt=""></img>
                        <h3 className='text-muted fs-2'>Coffee Latte</h3>
                        <div className='text-muted fs-2 py-3 fw-bold'>Rp.15.000,00</div>
                    </div>
                </div>

                <form action="">
                    <div class="inputBox">
                        <span class="fas fa-user"></span>
                        <input type="number" placeholder="Jumlah Pesanan"></input>
                    </div>
                </form>

                <div className='col-6'>
                    <div className='p-3 outline'>
                        <img className='py-5' style={{ width: 200}} src={img2} alt=""></img>
                        <h3 className='text-muted fs-2'>Vanilla Latte</h3>
                        <div className='text-muted fs-2 py-3 fw-bold'>Rp.18.000,00</div>
                    </div>
                </div>

                <form action="">
                    <div class="inputBox">
                        <span class="fas fa-user"></span>
                        <input type="number" placeholder="Jumlah Pesanan"></input>
                    </div>
                </form>

            <a href="menu" class="btn"><span className='me-2'><BsPlusSquare/></span> tambah pesanan</a>

        <form>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="text" placeholder="Atas nama"></input>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <select className="fs-3 py-4 bg-black col-11 text-muted" aria-label=".form-select-lg example">
                    <option selected>Pilih Nomor Meja</option>
                    <option value="1">34</option>
                    <option value="2">22</option>
                    <option value="3">30</option>
                    <option value="3">05</option>
                    <option value="3">24</option>
                    <option value="3">02</option>
                </select>
            </div>
            <a href="home" onClick={() => shoot("Terima Kasih Pesanan Akan Segera Diproses! Pembayaran silahkan menuju kasir")} class="btn">buat pesanan</a>
        </form>
    </div>
</section>

);
}

export default pesanan;