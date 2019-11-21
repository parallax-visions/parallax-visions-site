import React from "react"

import GameCard from '../components/GameCard'
import Layout from "../components/layout"

import SEO from "../components/seo"

function IndexPage() {
  const gameData= []

  return (

    <Layout>
      <SEO title="Home" />
      <p className="subheader">Games</p>
      {gameData.map((game) => {
        return <GameCard {...game} />
      })}
    </Layout>
  )
}

export default IndexPage
