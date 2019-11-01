import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Tiles from "./tiles.json";
import Header from './components/Header';
import BigMeme from "./components/BigMeme"

class App extends React.Component {
  state = {
    Tiles,
    validTiles: Tiles
  }
  render() {
    console.log(this.state.validTiles)
    return (
      <div>
        <Header></Header>
        <BigMeme></BigMeme>
        {this.state.Tiles.map(tile => (
          <Card id={tile.id} img={tile.img} cb={this.clickHandler} />
        ))}
      </div>
    )

  }

  clickHandler = id => {
    console.log("clicked " + id);
    let validTiles = this.state.validTiles.filter(tile => {
      // console.log(id);
      if (id !== tile.id) {
        return tile;
      }
    })
    this.setState({ validTiles: validTiles })
    this.CheckValid(id)
  }

  CheckValid = id => {
    let lose = true;
    for (let tile of this.state.validTiles) {
      if (id === tile.id) {
        lose = false;
      }
    }
    if (lose === true) {
      this.reset()
    }
    else {
      this.shuffle(this.state.Tiles)
    }
  }

  reset = () => {
    console.log("reset")
    this.setState({ validTiles: Tiles })
  }

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    this.setState({Tiles: a});
  }
}

export default App;
