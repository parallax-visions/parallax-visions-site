import React from "react"

import GameCard from '../components/GameCard'
import Layout from "../components/layout"

import SEO from "../components/seo"

function IndexPage() {
  const gameData= [{
    title: 'Interference',
    year: '2018',
    img_path: '/interference.png',
    description: 'Scan an abandoned research facility for crucial information while being attacked by an onslaught of cybernetic interlopers. Beware though, their cybernetic shielding can acclimate to your weapons.',
    itch_link: ''
  },
  {
    title: 'Interference',
    year: '2018',
    img_path: '/interference.png',
    description: 'Scan an abandoned research facility for crucial information while being attacked by an onslaught of cybernetic interlopers. Beware though, their cybernetic shielding can acclimate to your weapons.',
    itch_link: ''
  }
  
  ]

  return (

    <Layout>
      <SEO title="Home" />
      <p class="subheader">Games</p>
      {gameData.map((game) => {
        return <GameCard {...game} />
      })}
    </Layout>
  )
}

export default IndexPage
