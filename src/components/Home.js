import React from 'react'
import "../styles/home.css";

function Home() {
    return (
        <div className="container-fluid">
            <div className="challenger__carousel">
            <div id="carouselExampleIndicators" class="carousel" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn-l-cyberpunk.cdprojektred.com/wallpapers/1080p/V-Origami-en.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.playstation.com/is/image/SCEA/doom-eternal-hero-banner-01-ps4-us-15jul19?$native_xxl_nt$" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.imgbase.info/images/safe-wallpapers/video_games/dark_souls/58425_dark_souls_dark_souls_3.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<h1>Thousands of games to choose from</h1>
        </div>
    )
}

export default Home
