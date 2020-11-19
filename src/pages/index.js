import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import GameList from '../components/GameList'
import ContactForm from '../components/ContactForm'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
        <div style={{maxWidth: 960, margin: 'auto', fontSize: 28, paddingLeft: 10, paddingRight: 10}}>
          <p>Parallax Visions is an independent game development studio based in New Orleans, Louisiana. </p>
          <p>We specialize in creating games that are surreal and psychedelic.</p>
          <p>Parallax Visions is also the host of the New Orleans Global Game Jam.</p>
          <GameList />
        </div>
      </section>
      <section id="work" className="section-alternate">
        <div style={{maxWidth: 960, margin: 'auto', fontSize: 28}}>
          <p>Parallax Visions is a creative agency based in New Orleans, Louisiana. </p>
          <p>We provide services for businesses looking to drive engagement and utilize VR/AR technology.</p>
          <p>Here are some services we've provided in the past to get you thinking:</p>
          <ul className="service-list">
            <li>Custom VR Training Platforms</li>
            <li>Custom Software Development</li>
            <li>360 Stereoscopic Video Production</li>
            <li>Real-Time Audio-Visual Projections</li>
          </ul>
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
