import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state= {
    api:[],
    apiCopy: [],
    value: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon/")
    .then(resp => resp.json())
    .then(data => this.setState({api: data, apiCopy: data}))
  }

  searchHandler = (e) => {
    let typedValue = e.target.value
    this.setState(() => ({value: typedValue}))
    // console.log(this.state.value)
  }

  filter = () =>{
    return this.state.apiCopy.filter(poke => poke.name.toLowerCase().includes(this.state.value.toLowerCase()))
  }

  submitHandler = (newPoke) =>{
    
    let newPokemon = {
      name: newPoke.name,
      hp: newPoke.hp,
      sprites: {
        front: newPoke.front,
        back: newPoke.back
      }
    }

     let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }

    fetch("http://localhost:3000/pokemon/", options)
    .then(resp => resp.json())
    .then(pokemon => this.setState({ apiCopy: [pokemon, ...this.state.apiCopy] }))
  }



  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler} />
        <br />
        <Search searchHandler={this.searchHandler} searchVal={this.state.value}/>
        <br />
        <PokemonCollection pokemon={this.filter()}/>
      </Container>
    )
  }
}

export default PokemonPage
