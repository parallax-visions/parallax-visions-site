import React from "react"

function GameCard(props) {
  console.log(props)
  const {
    title,
    subtitle,
    img_path,
    description,
    itch_link,
    div_id,
    index,
  } = props

  return (
    <div id={div_id}>
      <span className={index % 2 == 0 ? "mediabox_left" : "mediabox"}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        <img alt={title} className="thumbnail" src={`${img_path}`} />
        <p className="description">{description}</p>
        <a href={itch_link} className="learn-more">
          Learn more
        </a>
      </span>
    </div>
  )
}

export default GameCard
