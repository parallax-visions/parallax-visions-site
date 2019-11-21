import React from "react"

function Header() {
  return (
    <header>
      <div id="news_bar">
        <a class="social_button" href="https://www.instagram.com/parallax_visions/?hl=en">
            <img class="social_icon" src="instagram_final.png" /></a>
        <a class="social_button" href="https://twitter.com/parallaxvisions">
            <img class="social_icon" src="final_twitter.png" /></a>
        <a class="social_button" href="https://www.facebook.com/parallaxvisions/">
            <img class="social_icon" src="facebook_icon.png" /></a>
        <a class="social_button" href="https://parallaxvisions.itch.io/">
            <img class="social_icon" src="itch_final.png" /></a>
        <p class="news">Follow us:</p>
      </div>
      <div id="navbar">  
        <ul class="navigation">
          <li><a class="tabs" href="Videos.html">Games</a></li>
          <li><a class="tabs" href="3D Projects.html">Music</a></li>
          <li><a class="tabs" href="Contact Info.html">About Us</a></li>
        </ul>
        <span><a href="home.html"><img id="logo" src="parallax_logo_new.png" /></a></span>
      </div>
    </header>
  )
}

export default Header
