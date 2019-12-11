import React from "react"

function Header() {
  return (
    <header>
    <img id="cover_image" src="/parallax_billboard.png" />
      <nav id="navbar">
      <ul class="navigation">
        <li><a class="tabs" href="/">Games</a></li>
        <li><a class="tabs" href="/music">Music</a></li>
        <li><a class="tabs" href="About Us.html">About Us</a></li>
      </ul>
      <span id="the_eye"
        ><a href="home.html"><img id="logo" src="/parallax_logo_new.png"/></a
      ></span>

      <ul class="social-links">
        <li>
          <a class="social_buttons" href="https://parallaxvisions.itch.io/">
            <img class="social_icon" src="/itch_icon.png"
          /></a>
        </li>
        <li>
          <a
            class="social_buttons"
            href="https://www.facebook.com/parallaxvisions/"
          >
            <img class="social_icon" src="/new_facebook.png"
          /></a>
        </li>
        <li>
          <a class="social_buttons" href="https://twitter.com/parallaxvisions">
            <img class="social_icon" src="/new_twitter.png"
          /></a>
        </li>
        <li>
          <a
            class="social_buttons"
            href="https://www.instagram.com/parallax_visions/?hl=en"
          >
            <img class="social_icon" src="/instagram_final.png"
          /></a>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Header
