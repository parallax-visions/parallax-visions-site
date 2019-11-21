import React from "react"

function Header() {
  return (
    <header>
      <div id="news_bar">
        <a className="social_button" href="https://www.instagram.com/parallax_visions/?hl=en">
            <img alt="social icon" className="social_icon" src="instagram_final.png" /></a>
        <a className="social_button" href="https://twitter.com/parallaxvisions">
            <img alt="social icon" className="social_icon" src="final_twitter.png" /></a>
        <a className="social_button" href="https://www.facebook.com/parallaxvisions/">
            <img alt="social icon" className="social_icon" src="facebook_icon.png" /></a>
        <a className="social_button" href="https://parallaxvisions.itch.io/">
            <img alt="social icon" className="social_icon" src="itch_final.png" /></a>
        <p className="news">Follow us:</p>
      </div>
      <div id="navbar">  
        <ul className="navigation">
          <li><a className="tabs" href="Videos.html">Games</a></li>
          <li><a className="tabs" href="3D Projects.html">Music</a></li>
          <li><a className="tabs" href="Contact Info.html">About Us</a></li>
        </ul>
        <span><a href="home.html"><img alt="parallax visions" id="logo" src="parallax_logo_new.png" /></a></span>
      </div>
    </header>
  )
}

export default Header
