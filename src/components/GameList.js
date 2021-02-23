import React, { Component } from "react"
import { Games } from "../shared/games"
import GameCard from "./GameCard"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
}

class GameList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      selectedGame: {},
    }
  }

  openModal(index) {
    this.setState({ modalOpen: true, selectedGame: Games[index] })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }
  render() {
    const { selectedGame } = this.state
    const { title, itch_link, img_path, description } = selectedGame
    return (
      <div
        style={{ flex: "1", display: "flex", justifyContent: "space-between" }}
      >
        <div id="games" style={{ width: 960 }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {Games.map((game, index) => {
              return (
                <GameCard
                  key={index}
                  index={index}
                  onClick={() => this.openModal(index)}
                  {...game}
                />
              )
            })}
          </div>
        </div>

        <Modal
          onRequestClose={() => this.closeModal()}
          isOpen={this.state.modalOpen}
          style={customStyles}
        >
          <p onClick={() => this.closeModal()}>X</p>
          <h2>{title}</h2>
          <img alt={title} src={`${img_path}`} />
          <p>{description}</p>
        </Modal>
      </div>
    )
  }
}

export default GameList
