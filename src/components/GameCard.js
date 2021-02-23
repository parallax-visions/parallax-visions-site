import React, { Component } from "react"
import {
  GameCardDescription,
  GameCardContainer,
  GameCardHeader,
  GameCardBody,
  GameCardImage,
} from "../styles/GameCard"

class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
      modalOpen: false,
    }
  }

  startHover() {
    this.setState({ hovering: true })
  }

  stopHover() {
    this.setState({ hovering: false })
  }

  handleClick() {
    const { onClick } = this.props

    this.stopHover()
    onClick()
  }

  formatDescription() {
    const { description } = this.props

    return description.slice(0, 125) + (description.length > 160 ? "..." : "")
  }

  render() {
    const { title, subtitle, img_path, itch_link, index, onClick } = this.props

    const hoverColors = ["#F22738", "#BF56AE", "#6EBF49", "#F2E41D", "#F2EDD5"]

    const hoverColor = hoverColors[Math.round(Math.random() * 4)]

    return (
      <div
        style={GameCardContainer}
        onMouseEnter={() => this.startHover()}
        onMouseLeave={() => this.stopHover()}
        onClick={() => this.handleClick()}
      >
        <img alt={title} style={GameCardImage} src={`${img_path}`} />
        <div
          style={{
            ...GameCardBody,
            backgroundColor: this.state.hovering ? hoverColor : "#E7E7E7",
          }}
        >
          <h2 style={GameCardHeader}>{title}</h2>
          <h2>{subtitle}</h2>

          <p style={GameCardDescription}>{this.formatDescription()}</p>
          <a href={itch_link}>Learn more</a>
        </div>
      </div>
    )
  }
}

export default GameCard
