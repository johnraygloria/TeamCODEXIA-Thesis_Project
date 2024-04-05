import React from 'react';
import '../pages/ArticlesStyle.css';
import Nav from '../Components/Navbar/Navbar_Main';
import Violet_Bkg from '../Components/Assets/articlespage_bkg2.jpg';
import WomenRH from '../Components/Assets/Reproductive_Women_img.jpg';

const Articles = () => {
  return (
    <>
    <Nav/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    
    <div className='Heading'>
            <h2>Journals and Articles</h2>
        <div className='Underline'>
            <p>Looking for more informations? Here are the best articles that will suit your interest!</p>
        </div>
    </div>


    <img className='articles-image' src={Violet_Bkg} alt='Article Background'/>
    
    <section className='article-cards'>

    <div class="card-list">
        <a href="https://www.healthline.com/health/womens-health/female-reproductive-organs#organs" target="_blank" class="card-item">
            <img src={WomenRH} alt="Card Image"/>
            <span class="reproductive">Reproductive</span>
            <h3>Learn more about Women's Reproductive Health.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>

        </a>
        <a href="#" target="_blank" class="card-item">
            <img src="images/designer.jpg" alt="Card Image"/>
            <span class="Reproductive">Reproductive</span>
            <h3>Learn more about Men's Reproductive Health.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>

        <a href="#" target="_blank" class="card-item">
            <img src="images/editor.jpg" alt="Card Image"/>
            <span class="FP">Family Planning</span>
            <h3>An "editor" ensures content quality and accuracy.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>

        <a href="#" target="_blank" class="card-item">
            <img src="images/editor.jpg" alt="Card Image"/>
            <span class="FP">Family Planning</span>
            <h3>An "editor" ensures content quality and accuracy.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>

        <a href="#" target="_blank" class="card-item">
            <img src="images/editor.jpg" alt="Card Image"/>
            <span class="Sex">Sex</span>
            <h3>An "editor" ensures content quality and accuracy.</h3>
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>

        <a href="#" target="_blank" class="card-item">
            <img src="images/editor.jpg" alt="Card Image"/>
            <span class="Sex">Sex</span>
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