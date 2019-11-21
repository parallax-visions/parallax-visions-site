import React from 'react'



function GameCard({title, year, img_path, description, itch_link}) {

  return (
    <span class="mediabox">
      <h1>{title} ({year})</h1>
      
      <img className="thumbnail" src={`${img_path}`} />
      <p class="description">{description}</p>
      <a class="learn-more">Learn more</a>
    </span>
  )
}

export default GameCard
