import React, { Component } from 'react';
import './App.css';
import Wall from './components/wall';
import Button from './components/button';
import Hand from './components/hand';
import Discard from './components/discard';
import ClearFloat from './components/clearFloat';
import MessageList from './components/messageList';
import ControlPanel from './components/controlPanel';
import { sortArray, shuffleArray } from './utils/array';
import Chow from './utils/chow';
import testState from './testState4.json';
// import testState from './testState5_kong.json';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   tiles: [],
    //   player1: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    //   player2: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    //   player3: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    //   player4: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
    //   discardPile: { main: [], recentDiscard: {} },
    //   turn: 0,
    //   messages: [],
    //   hasDrawnTile: true,
    //   disableDiscardButton: true,
    //   disableChowButton: true,
    //   disablePungButton: true,
    //   disableKongButton: true
    // }

    // Use a saved state to allow pung, chow testing.
    this.state = testState;
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
    // await this.setNewGame();

    // this.givePlayersTiles();
    // this.setState(testState);
    // this.sortAllHands();

    // this.tileCountVerification();
  }

  sortAllHands = () => {
    let player1 = { ...this.state.player1 };
    let player2 = { ...this.state.player2 };
    let player3 = { ...this.state.player3 };
    let player4 = { ...this.state.player4 };

    player1.main.sort(sortArray);
    player2.main.sort(sortArray);
    player3.main.sort(sortArray);
    player4.main.sort(sortArray);

    this.setState({ player1, player2, player3, player4 });
  }

  tileCountVerification = () => {
    const {
      tiles,
      player1,
      player2,
      player3,
      player4,
      discardPile
    } = this.state;

    let totalTiles = tiles.length
      + player1.main.length
      + player2.main.length
      + player3.main.length
      + player4.main.length
      + discardPile.main.length;

    console.log(`Total Tiles: ${totalTiles}`);
    (totalTiles !== 144) && console.log("Total tiles is not what it should be.");
  }

  handleShuffle = () => {
    let tiles = shuffleArray([...this.state.tiles]);
    this.outputMessage("Shuffled.");

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

    player1.main.sort(sortArray);
    player2.main.sort(sortArray);
    player3.main.sort(sortArray);
    player4.main.sort(sortArray);

    let turn = 1;
    this.outputMessage(`Waiting for player ${turn}...`);

    this.setState({ tiles, player1, player2, player3, player4, turn });
  }

  setNewGame = (message = "New game set.") => {
    this.outputMessage(message);

    let tiles = [...this.tiles];
    tiles = shuffleArray(tiles);

    this.setState({
      tiles,
      player1: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player2: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player3: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      player4: { main: [], newTile: {}, flowers: [], chowPungKong: [] },
      discardPile: { main: [], recentDiscard: [] },
      turn: 0,
      hasDrawnTile: true,
      disableDiscardButton: false,
      disableChowButton: true
    });
  }

  handleReset = async () => {
    await this.setNewGame("Game resetted.");

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

    hasDrawnTile = true;

    // Remove and assign tile from wall to variable
    let grabbedTile = tiles.shift();
    let currentPlayer = "player" + this.state.turn;
    let currentPlayerHand = { ...this.state[currentPlayer] };

    // Set the player's latest tile
    currentPlayerHand.newTile = grabbedTile;
    currentPlayerHand.main.push(grabbedTile);

    let disableDiscardButton = false;
    let disablePungButton = true;

    this.setState({
      tiles,
      [currentPlayer]: currentPlayerHand,
      hasDrawnTile,
      disableDiscardButton,
      disablePungButton
    });
  }

  handleClearMessages = () => {
    this.setState({ messages: ["Messages cleared."] });
  }

  discardTile = (tileCode, playerNum) => {
    let player = { ...this.state[playerNum] };
    let discardPile = { ...this.state.discardPile };
    let turn = this.state.turn;
    // let hasDrawnTile = this.state.hasDrawnTile;
    let hasDrawnTile = false;
    let disableDiscardButton = true;

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

    discardPile.recentDiscard.prevOwner = "player" + turn;

    turn = (turn === 4) ? (1) : (turn + 1);
    this.outputMessage(`Waiting for player ${turn}...`);

    this.setState({
      [playerNum]: player,
      discardPile,
      turn,
      hasDrawnTile,
      disableDiscardButton
    });
  }

  // TODO: Instead of having a separate array to hold exposed tile sets, add a
  // property to the tile object to indicate if it's exposed.
  handleExposeTileSet = (turn, exposedTileSet) => {
    // Remove tileCode from discard pile
    let discardPile = { ...this.state.discardPile };
    let recentDiscard = discardPile.recentDiscard;
    discardPile.main.pop();
    discardPile.recentDiscard = {};

    // Put the discarded tile into the current player's hand
    let currentPlayer = this.state["player" + turn];
    currentPlayer.main.push(recentDiscard);

    // Disable the Draw Tile button and allow discarding tile mode
    let hasDrawnTile = true;
    let disableDiscardButton = false;
    let disableDrawTileBtn = true;

    // Set player.newTile object to the one obtained from chow
    // This can be useful to know when it is the winning move
    currentPlayer.newTile = recentDiscard;

    // Add last discarded tile and remaining set tiles in player's hand to 
    // exposed tile sets array and simultaneously remove the respective tiles
    // from the player's hand.
    currentPlayer.chowPungKong.push(recentDiscard);
    currentPlayer.main = currentPlayer.main.filter(tile => {
      return (tile.code !== recentDiscard.code)
    });

    for (let i = 0; i < exposedTileSet.length; i++) {
      currentPlayer.chowPungKong.push(exposedTileSet[i]);

      currentPlayer.main = currentPlayer.main.filter(tile => {
        return (tile.code !== exposedTileSet[i].code)
      });
    }

    currentPlayer.chowPungKong.sort(sortArray);

    this.setState({
      [currentPlayer]: currentPlayer,
      discardPile,
      hasDrawnTile,
      disableDiscardButton,
      disableDrawTileBtn,
      turn
    });
  }

  isPlayerTurn = (player) => {
    const playerTurnNum = parseInt(player.slice(-1));
    return (this.state.turn === playerTurnNum) ? true : false;
  }

  // addChowTilesInHandToChowTypeArray = (chowType, prefix, suffix1, suffix2, currentPlayerHand) => {
  //   const chowMatch1 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + suffix1)
  //   });
    
  //   const chowMatch2 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + suffix2)
  //   });

  //   if (chowMatch1) chowType.push(chowMatch1);
  //   if (chowMatch2) chowType.push(chowMatch2);
  // }

  addSameTilesInHandToPungArray = (handState) => {
    handState.pung = handState.player.main.filter(tile => {
      return tile.code.includes(handState.prefix + handState.tileIndex)
    });
  }

  addSameTilesInHandToKongArray = (handState) => {
    handState.kong = handState.player.main.filter(tile => {
      return tile.code.includes(handState.prefix + handState.tileIndex)
    });
  }

  // canRightChow = (handState) => {
  //   if (handState.playerTurn === handState.turn && handState.rightJoinChow.length === 2) {
  //     handState.disableChowButton = false;
  //     handState.chowBgColor = "lightcoral";
  //   }

  //   return handState;
  // }

  // canLeftChow = (handState) => {
  //   if (handState.playerTurn === handState.turn && handState.leftJoinChow.length === 2) {
  //     handState.disableChowButton = false;
  //     handState.chowBgColor = "lightcoral";
  //   }

  //   return handState;
  // }

  // canMiddleChow = (handState) => {
  //   if (handState.playerTurn === handState.turn && handState.middleJoinChow.length === 2) {
  //     handState.disableChowButton = false;
  //     handState.chowBgColor = "lightcoral";
  //   }

  //   return handState;
  // }

  canPung = (handState) => {
    if (handState.pung.length === 2) {
      handState.disablePungButton = false;
      handState.pungBgColor = "red";
    } else {
      handState.disablePungButton = true;
    }

    return handState;
  }

  canKong = (handState) => {
    if (handState.kong.length === 3) {
      handState.disableKongButton = false;
      handState.kongBgColor = "red";
    } else {
      handState.disableKongButton = true;
    }

    return handState;
  }

  handleRightJoinChow = (handState) => {
    handState.plusOne = parseInt(handState.tileIndex) + 1;
    handState.plusTwo = parseInt(handState.tileIndex) + 2;
    Chow.addChowTilesInHandToChowTypeArray(handState.rightJoinChow, handState.prefix, handState.plusOne, handState.plusTwo, handState.player.main);
    handState = Chow.canRightChow(handState);

    return handState;
  }

  handleLeftJoinChow = (handState) => {
    handState.minusOne = parseInt(handState.tileIndex) - 1;
    handState.minusTwo = parseInt(handState.tileIndex) - 2;
    Chow.addChowTilesInHandToChowTypeArray(handState.leftJoinChow, handState.prefix, handState.minusOne, handState.minusTwo, handState.player.main);
    handState = Chow.canLeftChow(handState);

    return handState;
  }

  handleMiddleJoinChow = (handState) => {
    handState.left = parseInt(handState.tileIndex) - 1;
    handState.right = parseInt(handState.tileIndex) + 1;
    Chow.addChowTilesInHandToChowTypeArray(handState.middleJoinChow, handState.prefix, handState.left, handState.right, handState.player.main);
    handState = Chow.canMiddleChow(handState);

    return handState;
  }

  handlePung = (handState) => {
    this.addSameTilesInHandToPungArray(handState);
    handState = this.canPung(handState);

    return handState;
  }

  handleKong = (handState) => {
    this.addSameTilesInHandToKongArray(handState);
    handState = this.canKong(handState);

    return handState;
  }

  disablePungKongAfterDrawingTile = (handState, hasDrawnTile) => {
    if (handState.playerTurn === handState.turn) {
      if (hasDrawnTile) {
        handState.disablePungButton = true;
        handState.disableKongButton = true;
        handState.pungBgColor = null;
        handState.kongBgColor = null;
      }
    }

    return handState;
  }

  preventPlayerPungKongOwnDiscards = (handState, discardPile) => {
    if (discardPile.recentDiscard.prevOwner === handState.playerNum) {
      handState.disablePungButton = true;
      handState.disableKongButton = true;
      handState.pungBgColor = null;
      handState.kongBgColor = null;
    }

    return handState;
  }

  setInitialTurnDrawDiscardBtns = (handState, hasDrawnTile) => {
    if (handState.playerTurn === handState.turn) {
      handState.disableDrawTileBtn = hasDrawnTile;
    } else {
      handState.disableDiscardButton = true;
      handState.disableDrawTileBtn = true;
    }

    return handState;
  }

  renderHand = (playerNum) => {
    const {
      discardPile,
      turn,
      hasDrawnTile,
      disableChowButton,
      disableDiscardButton,
      disablePungButton,
      disableKongButton,
      disableDrawTileBtn
    } = this.state;
    
    const recentDiscardCode = _.get(discardPile, "recentDiscard.code");
    
    let handState = {};
    handState.player = this.state[playerNum];
    handState.playerNum = playerNum;
    handState.turn = turn;
    handState.playerTurn = parseInt(playerNum.slice(-1));
    handState.disableDiscardButton = disableDiscardButton;
    handState.disableChowButton = disableChowButton;
    handState.disablePungButton = disablePungButton;
    handState.disableKongButton = disableKongButton;
    handState.disableDrawTileBtn = disableDrawTileBtn;
    handState.pungBgColor = null;
    handState.kongBgColor = null;
    handState.chowBgColor = null;
    handState.pung = [];
    handState.kong = [];
    handState.rightJoinChow = [];
    handState.leftJoinChow = [];
    handState.middleJoinChow = [];

    // If the discard pile has a tile, handle Chow/Pung/Kong if available
    if (recentDiscardCode) {
      // Split last discard code into tile type and index number
      handState.tileIndex = recentDiscardCode.charAt(3); // 2
      handState.prefix = recentDiscardCode.substring(0, 3); // bar

      handState = this.handleRightJoinChow(handState);
      handState = this.handleLeftJoinChow(handState);
      handState = this.handleMiddleJoinChow(handState);
      handState = this.handlePung(handState);
      handState = this.handleKong(handState);
    } else {
      handState.disablePungButton = true;
      handState.disableKongButton = true;
    }

    handState = this.setInitialTurnDrawDiscardBtns(handState, hasDrawnTile);
    handState = this.disablePungKongAfterDrawingTile(handState, hasDrawnTile);
    handState = this.preventPlayerPungKongOwnDiscards(handState, discardPile);

    handState.player.main.sort(sortArray);

    // if (handState.playerTurn === handState.turn) console.log(handState);

    return (
      <Hand
        discardTile={this.discardTile}
        handleDrawTile={this.handleDrawTile}
        handleExposeTileSet={this.handleExposeTileSet}
        data={handState}
      />
    )
  }

  render() {
    const {
      tiles,
      discardPile,
      messages
    } = this.state;

    return (
      <React.Fragment>
        <ControlPanel 
          tiles={tiles}
          handleShuffle={this.handleShuffle}
          handleClearMessages={this.handleClearMessages}
          handleReset={this.handleReset}
        />

        <Wall tiles={tiles} end={18} />
        <Wall tiles={tiles} end={36} />
        <Wall tiles={tiles} end={54} />
        <Wall tiles={tiles} end={72} />
        <Wall tiles={tiles} end={90} />
        <Wall tiles={tiles} end={108} />
        <Wall tiles={tiles} end={126} />
        <Wall tiles={tiles} end={145} />
        <ClearFloat />

        {this.renderHand("player1")}
        {this.renderHand("player2")}
        {this.renderHand("player3")}
        {this.renderHand("player4")}

        <Discard player={discardPile} playerNum="player0" />
        <MessageList messages={messages} />
      </React.Fragment>
    );
  }
}

export default App;