import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function AboutPage() {

  return (

    <Layout>
      <SEO title="About" />
      <div id="rosebox">
        <h4 className="subheader">MUSIC</h4>
      </div>
      <div id="rosebox">
        <div id="music-container">
          <iframe style={{border: 0, width: 700, height: 307}} src="https://bandcamp.com/EmbeddedPlayer/album=3737920697/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://parallaxvisions.bandcamp.com/album/post-internet">[Post Internet] by Michael Bordle</a></iframe>
        </div>
      </div>
      
    </Layout>
  )
}

export default AboutPage
