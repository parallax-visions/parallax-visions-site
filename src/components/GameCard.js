import React from 'react'



function GameCard({title, year, img_path, description, itch_link}) {

  return (
    <span className="mediabox">
      <h1>{title} ({year})</h1>
      
      <img alt={title} className="thumbnail" src={`${img_path}`} />
      <p className="description">{description}</p>
      <a href={itch_link} className="learn-more">Learn more</a>
    </span>
  )
}

export default GameCard
