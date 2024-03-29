import React from 'react';
import '../pages/ArticlesStyle.css';
import Nav from '../Components/Navbar/Navbar_Main';
import Violet_Bkg from '../Components/Assets/violet_pink_bkg_img2.jpg'; 

const Articles = () => {
  return (
    <>
    <Nav/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    
    <img className='articles-image' src={Violet_Bkg} alt='Article Background'/>
    
    <section className='article-cards'>
    <div class="card-list">
        <a href="#" class="card-item">
            <img src="images/developer.jpg" alt="Card Image"/>
            <span class="developer">Developer</span>
            <h3>A "developer" codes software and websites.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="images/designer.jpg" alt="Card Image"/>
            <span class="designer">Designer</span>
            <h3>A "designer" is a design expert.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="images/editor.jpg" alt="Card Image"/>
            <span class="editor">Editor</span>
            <h3>An "editor" ensures content quality and accuracy.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
      </div>
      </section>
    </>
  )
}

export default Articles