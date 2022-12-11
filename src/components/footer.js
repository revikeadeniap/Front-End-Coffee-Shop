import React from 'react' 
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function footer() {
    return (
        <section class="footer">
        <div className='share'>
            <a href="https://twitter.com/najwa_ainaya?t=-WiPiI7UPu9-pR-Q-nj_TA&s=08" className='p-2'><FaTwitter/></a>
            <a href="http://instagram.com/revike_prahadany" className='p-2'><FaInstagramSquare/></a>
            <a href="https://vt.tiktok.com/ZSdd29k72/" className='p-2'><FaTiktok/></a>
            
        </div>
        
        
        <div class="credit">created by <span>Kelompok 4</span> | all rights reserved</div>
        
        </section>
    );
  }
  
  export default footer;
