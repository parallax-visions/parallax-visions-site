import React from 'react'
import {Games} from '../shared/games'
import GameCard from './GameCard'


export default function GameList() {
  return (
    <div style={{flex: '1', display: 'flex', justifyContent: 'space-between'}}>
      <div id="games" style={{width: 960}}>
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {Games.map((game, index) => {
            console.log(index)
            return <GameCard key={index} index={index} {...game} />
          })}
        </div>
      </div>
    </div>
  )
}
