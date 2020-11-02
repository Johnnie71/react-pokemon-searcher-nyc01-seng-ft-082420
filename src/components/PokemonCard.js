import React from 'react'
import { Card } from 'semantic-ui-react'
// import PokemonPage from './PokemonPage'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickedHandler = () => {
    this.setState(previousState => ({
      clicked: !previousState.clicked
    }))
  }

  
  render() {
    let pokemon  = this.props.pokemon

    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickedHandler}>
            <img alt="oh no!" src={this.state.clicked ? pokemon.sprites.back : pokemon.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
