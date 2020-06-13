import React, { Component } from 'react';
import './App.css';
import Wall from './components/wall';
import Button from './components/button';
import Hand from './components/hand';
import Discard from './components/discard';
import ClearFloat from './components/clearFloat';
import MessageList from './components/messageList';

class App extends Component {
  state = {
    tiles: [],
    player1: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    player2: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    player3: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    player4: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    discardPile: { main: [], recentDiscard: {} },
    turn: 0,
    messages: [],
    hasDrawnTile: true
  }

  // 144 tiles
  tiles = [
    { type: "bamboo", label: "Bamboo 1 1", code: "bam1-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 1 2", code: "bam1-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 1 3", code: "bam1-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 1 4", code: "bam1-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 2 1", code: "bam2-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 2 2", code: "bam2-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 2 3", code: "bam2-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 2 4", code: "bam2-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 3 1", code: "bam3-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 3 2", code: "bam3-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 3 3", code: "bam3-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 3 4", code: "bam3-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 4 1", code: "bam4-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 4 2", code: "bam4-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 4 3", code: "bam4-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 4 4", code: "bam4-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 5 1", code: "bam5-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 5 2", code: "bam5-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 5 3", code: "bam5-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 5 4", code: "bam5-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 6 1", code: "bam6-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 6 2", code: "bam6-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 6 3", code: "bam6-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 6 4", code: "bam6-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 7 1", code: "bam7-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 7 2", code: "bam7-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 7 3", code: "bam7-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 7 4", code: "bam7-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 8 1", code: "bam8-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 8 2", code: "bam8-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 8 3", code: "bam8-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 8 4", code: "bam8-4", img: "", prevOwner: "", currOwner: "" },

    { type: "bamboo", label: "Bamboo 9 1", code: "bam9-1", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 9 2", code: "bam9-2", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 9 3", code: "bam9-3", img: "", prevOwner: "", currOwner: "" },
    { type: "bamboo", label: "Bamboo 9 4", code: "bam9-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 1 1", code: "cha1-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 1 2", code: "cha1-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 1 3", code: "cha1-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 1 4", code: "cha1-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 2 1", code: "cha2-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 2 2", code: "cha2-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 2 3", code: "cha2-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 2 4", code: "cha2-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 3 1", code: "cha3-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 3 2", code: "cha3-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 3 3", code: "cha3-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 3 4", code: "cha3-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 4 1", code: "cha4-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 4 2", code: "cha4-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 4 3", code: "cha4-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 4 4", code: "cha4-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 5 1", code: "cha5-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 5 2", code: "cha5-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 5 3", code: "cha5-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 5 4", code: "cha5-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 6 1", code: "cha6-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 6 2", code: "cha6-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 6 3", code: "cha6-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 6 4", code: "cha6-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 7 1", code: "cha7-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 7 2", code: "cha7-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 7 3", code: "cha7-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 7 4", code: "cha7-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 8 1", code: "cha8-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 8 2", code: "cha8-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 8 3", code: "cha8-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 8 4", code: "cha8-4", img: "", prevOwner: "", currOwner: "" },

    { type: "character", label: "Ten Thousand 9 1", code: "cha9-1", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 9 2", code: "cha9-2", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 9 3", code: "cha9-3", img: "", prevOwner: "", currOwner: "" },
    { type: "character", label: "Ten Thousand 9 4", code: "cha9-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 1 1", code: "dot1-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 1 2", code: "dot1-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 1 3", code: "dot1-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 1 4", code: "dot1-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 2 1", code: "dot2-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 2 2", code: "dot2-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 2 3", code: "dot2-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 2 4", code: "dot2-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 3 1", code: "dot3-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 3 2", code: "dot3-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 3 3", code: "dot3-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 3 4", code: "dot3-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 4 1", code: "dot4-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 4 2", code: "dot4-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 4 3", code: "dot4-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 4 4", code: "dot4-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 5 1", code: "dot5-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 5 2", code: "dot5-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 5 3", code: "dot5-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 5 4", code: "dot5-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 6 1", code: "dot6-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 6 2", code: "dot6-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 6 3", code: "dot6-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 6 4", code: "dot6-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 7 1", code: "dot7-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 7 2", code: "dot7-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 7 3", code: "dot7-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 7 4", code: "dot7-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 8 1", code: "dot8-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 8 2", code: "dot8-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 8 3", code: "dot8-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 8 4", code: "dot8-4", img: "", prevOwner: "", currOwner: "" },

    { type: "dot", label: "Barrel 9 1", code: "dot9-1", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 9 2", code: "dot9-2", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 9 3", code: "dot9-3", img: "", prevOwner: "", currOwner: "" },
    { type: "dot", label: "Barrel 9 4", code: "dot9-4", img: "", prevOwner: "", currOwner: "" },

    { type: "direction", label: "North 1", code: "dirN1", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "North 2", code: "dirN2", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "North 3", code: "dirN3", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "North 4", code: "dirN4", img: "", prevOwner: "", currOwner: "" },

    { type: "direction", label: "South 1", code: "dirS1", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "South 2", code: "dirS2", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "South 3", code: "dirS3", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "South 4", code: "dirS4", img: "", prevOwner: "", currOwner: "" },

    { type: "direction", label: "West 1", code: "dirW1", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "West 2", code: "dirW2", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "West 3", code: "dirW3", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "West 4", code: "dirW4", img: "", prevOwner: "", currOwner: "" },

    { type: "direction", label: "East 1", code: "dirE1", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "East 2", code: "dirE2", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "East 3", code: "dirE3", img: "", prevOwner: "", currOwner: "" },
    { type: "direction", label: "East 4", code: "dirE4", img: "", prevOwner: "", currOwner: "" },

    { type: "cardinal", label: "Red Center 1", code: "carR1", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Red Center 2", code: "carR2", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Red Center 3", code: "carR3", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Red Center 4", code: "carR4", img: "", prevOwner: "", currOwner: "" },

    { type: "cardinal", label: "Green Fat Choi 1", code: "carG1", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Green Fat Choi 2", code: "carG2", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Green Fat Choi 3", code: "carG3", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "Green Fat Choi 4", code: "carG4", img: "", prevOwner: "", currOwner: "" },

    { type: "cardinal", label: "White Board 1", code: "carW1", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "White Board 2", code: "carW2", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "White Board 3", code: "carW3", img: "", prevOwner: "", currOwner: "" },
    { type: "cardinal", label: "White Board 4", code: "carW4", img: "", prevOwner: "", currOwner: "" },

    { type: "flower", label: "Flower 1", code: "flo1", img: "", prevOwner: "", currOwner: "" },
    { type: "flower", label: "Flower 2", code: "flo2", img: "", prevOwner: "", currOwner: "" },
    { type: "flower", label: "Flower 3", code: "flo3", img: "", prevOwner: "", currOwner: "" },
    { type: "flower", label: "Flower 4", code: "flo4", img: "", prevOwner: "", currOwner: "" },

    { type: "season", label: "Season 1", code: "sea1", img: "", prevOwner: "", currOwner: "" },
    { type: "season", label: "Season 2", code: "sea2", img: "", prevOwner: "", currOwner: "" },
    { type: "season", label: "Season 3", code: "sea3", img: "", prevOwner: "", currOwner: "" },
    { type: "season", label: "Season 4", code: "sea4", img: "", prevOwner: "", currOwner: "" }
  ];

  async componentDidMount() {
    await this.setNewGame();

    this.givePlayersTiles();

    this.tileCountVerification();
  }

  tileCountVerification = () => {
    const { tiles, player1, player2, player3, player4, discardPile } = this.state;
    let totalTiles = tiles.length + player1.main.length + player2.main.length + player3.main.length + player4.main.length + discardPile.main.length;
    console.log(`Total Tiles: ${totalTiles}`);
    (totalTiles !== 144) && console.log("Total tiles is not what it should be.");
  }

  // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  }

  handleShuffle = () => {
    this.outputMessage("Shuffled.");
    let tiles = this.shuffle([...this.state.tiles]);

    this.setState({ tiles });
  }

  getTileChunk = (tiles, player, index, amount) => {
    let grabbedTiles = [];
    grabbedTiles = tiles.splice(index, amount);

    return player.concat(grabbedTiles);
  }

  givePlayersTiles = () => {
    let tiles = [...this.state.tiles];
    let player1 = { ...this.state.player1 };
    let player2 = { ...this.state.player2 };
    let player3 = { ...this.state.player3 };
    let player4 = { ...this.state.player4 };

    player1.main = this.getTileChunk(tiles, player1.main, 0, 4);
    player2.main = this.getTileChunk(tiles, player2.main, 0, 4);
    player3.main = this.getTileChunk(tiles, player3.main, 0, 4);
    player4.main = this.getTileChunk(tiles, player4.main, 0, 4);

    player1.main = this.getTileChunk(tiles, player1.main, 0, 4);
    player2.main = this.getTileChunk(tiles, player2.main, 0, 4);
    player3.main = this.getTileChunk(tiles, player3.main, 0, 4);
    player4.main = this.getTileChunk(tiles, player4.main, 0, 4);

    player1.main = this.getTileChunk(tiles, player1.main, 0, 4);
    player2.main = this.getTileChunk(tiles, player2.main, 0, 4);
    player3.main = this.getTileChunk(tiles, player3.main, 0, 4);
    player4.main = this.getTileChunk(tiles, player4.main, 0, 4);

    // Jump tiles
    player1.main = this.getTileChunk(tiles, player1.main, 0, 1);
    player1.main = this.getTileChunk(tiles, player1.main, 3, 1);
    player2.main = this.getTileChunk(tiles, player2.main, 0, 1);
    player3.main = this.getTileChunk(tiles, player3.main, 0, 1);
    player4.main = this.getTileChunk(tiles, player4.main, 0, 1);

    let turn = 1;
    this.outputMessage(`Waiting for player ${turn}...`);

    this.setState({ tiles, player1, player2, player3, player4, turn });
  }

  setNewGame = (message = "New game set.") => {
    this.outputMessage(message);

    let tiles = [...this.tiles];
    tiles = this.shuffle(tiles);

    this.setState({
      tiles,
      player1: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player2: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player3: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player4: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      discardPile: {
        main: [],
        recentDiscard: []
      },
      turn: 0,
      hasDrawnTile: true
    });
  }

  handleReset = async () => {
    await this.setNewGame("Game resetted.");

    // Give tiles to all players
    this.givePlayersTiles();
  }

  outputMessage = (message) => {
    let messages = [...this.state.messages];
    messages.push(message);

    this.setState({ messages });
  }

  handleDrawTile = () => {
    let tiles = [...this.state.tiles];
    let hasDrawnTile = this.state.hasDrawnTile;
    hasDrawnTile = !hasDrawnTile;

    // Remove and assign tile from wall to variable
    let grabbedTile = tiles.shift();
    let turn = this.state.turn;
    let currentPlayer = "player" + turn;
    let currentPlayerHand = { ...this.state[currentPlayer] };

    // Define the player's latest tile
    currentPlayerHand.newTile = grabbedTile;
    currentPlayerHand.main.push(grabbedTile);

    // console.log(`hasDrawnTile: ${hasDrawnTile}`);

    this.setState({ tiles, [currentPlayer]: currentPlayerHand, hasDrawnTile });
  }

  handleClearMessages = () => {
    this.setState({ messages: ["Messages cleared."] });
  }

  discardTile = (tileCode, playerNum, newTile = false) => {
    let player = { ...this.state[playerNum] };
    let discardPile = { ...this.state.discardPile };
    let turn = this.state.turn;
    let hasDrawnTile = this.state.hasDrawnTile;
    hasDrawnTile = !hasDrawnTile;

    // let playerHand = (newTile) ? player.newTile : player.main;

    // Get tile to be removed and place in discard pile.
    let discardingTile = player.main.filter(tile => {
      return tile.code === tileCode
    })[0];
    discardPile.recentDiscard = discardingTile;
    discardPile.main.push(discardingTile);

    // Set new hand with tile removed
    player.main = player.main.filter(tile => {
      return tile.code !== tileCode
    });

    // Empty newTile if discarding it
    if (player.newTile.code === discardingTile.code) {
      player.newTile = {};
    }

    turn = (turn === 4) ? (1) : (turn + 1);
    this.outputMessage(`Waiting for player ${turn}...`);

    // return;
    this.setState({ [playerNum]: player, discardPile, turn, hasDrawnTile });
  }

  render() {
    const {
      tiles,
      player1,
      player2,
      player3,
      player4,
      discardPile,
      turn,
      messages,
      hasDrawnTile
    } = this.state;

    return (
      <React.Fragment>
        <div>
          <Button name="shuffle" label="Shuffle" onClick={this.handleShuffle} />
          <Button name="clearMessages" label="Clear Messages" onClick={this.handleClearMessages} />
          <Button name="reset" label="Reset" onClick={this.handleReset} />
          {tiles.length}
        </div>

        <Wall tiles={tiles} end={18} />
        <Wall tiles={tiles} end={36} />
        <Wall tiles={tiles} end={54} />
        <Wall tiles={tiles} end={72} />
        <Wall tiles={tiles} end={90} />
        <Wall tiles={tiles} end={108} />
        <Wall tiles={tiles} end={126} />
        <Wall tiles={tiles} end={145} />
        <ClearFloat />

        <Hand player={player1} onClick={this.discardTile} turn={turn} playerNum="player1" handleDrawTile={this.handleDrawTile} hasDrawnTile={hasDrawnTile} />
        <Hand player={player2} onClick={this.discardTile} turn={turn} playerNum="player2" handleDrawTile={this.handleDrawTile} hasDrawnTile={hasDrawnTile} />
        <Hand player={player3} onClick={this.discardTile} turn={turn} playerNum="player3" handleDrawTile={this.handleDrawTile} hasDrawnTile={hasDrawnTile} />
        <Hand player={player4} onClick={this.discardTile} turn={turn} playerNum="player4" handleDrawTile={this.handleDrawTile} hasDrawnTile={hasDrawnTile} />

        <Discard player={discardPile} bgColor="lightcoral" playerNum="player0" color="white" discard={true} />

        <MessageList messages={messages} />
      </React.Fragment>
    );
  }
}

export default App;