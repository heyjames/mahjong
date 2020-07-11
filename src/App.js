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
import Chow from './utils/Chow';
import PungKong from './utils/PungKong';
import tiles from './utils/tiles';
//import testState from './testState4.json';
//import testState from './testState5_kong.json';
import testState from './testState6_flower.json';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   tiles: [...tiles],
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
  

  async componentDidMount() {
    // await this.setNewGame();

    // this.givePlayersTiles();

    // this.setState(testState); // Disable
    // this.sortAllHands(); // Disable

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

    let tiles = [...this.state.tiles];
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
      disableChowButton: true,
      disablePungButton: true,
      disableKongButton: true
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























  handleDrawTile = (wallSide=null) => {
    let tiles = [...this.state.tiles];
    let hasDrawnTile = this.state.hasDrawnTile;

    hasDrawnTile = true;

    // Remove and assign tile from wall to variable
    // let grabbedTile = (wallSide === "tail") ? tiles.pop() : tiles.shift();
    let grabbedTile = null;

    if (wallSide === "tail") {
      // Flower grab on the right side
      grabbedTile = tiles.pop();
    } else {
      // Normal tile grab from left side
      grabbedTile = tiles.shift();
    }
    
    let disableDiscardButton = false;
    let disablePungButton = true;
    
    let currentPlayer = "player" + this.state.turn;
    let currentPlayerHand = { ...this.state[currentPlayer] };
    const grabbedTilePrefix = grabbedTile.code.substring(0, 3); // flo

    // Place tile in player's appropriate section of hand
    if (grabbedTilePrefix === "flo") {
      currentPlayerHand.flowers.push(grabbedTile);
      
      this.setState({
        tiles,
        [currentPlayer]: currentPlayerHand,
        hasDrawnTile,
        disableDiscardButton,
        disablePungButton
      }, () => {
        this.handleDrawTile("tail");
      });
    } else {
      // Set the player's latest tile
      currentPlayerHand.newTile = grabbedTile;
      currentPlayerHand.main.push(grabbedTile);
    }

    // let disableDiscardButton = false;
    // let disablePungButton = true;

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
    let pungKongObj = new  PungKong;

    // If the discard pile has a tile, handle Chow/Pung/Kong if available
    if (recentDiscardCode) {
      // Split last discard code into tile type and index number
      handState.tileIndex = recentDiscardCode.charAt(3); // 2
      handState.prefix = recentDiscardCode.substring(0, 3); // bar
      let chowObj = new Chow;
      
      handState = chowObj.handleRightJoinChow(handState);
      handState = chowObj.handleLeftJoinChow(handState);
      handState = chowObj.handleMiddleJoinChow(handState);
      handState = pungKongObj.handlePung(handState);
      handState = pungKongObj.handleKong(handState);
      
      chowObj = undefined;
    } else {
      handState.disablePungButton = true;
      handState.disableKongButton = true;
    }

    handState = this.setInitialTurnDrawDiscardBtns(handState, hasDrawnTile);
    handState = pungKongObj.disablePungKongAfterDrawingTile(handState, hasDrawnTile);
    handState = pungKongObj.preventPlayerPungKongOwnDiscards(handState, discardPile);

    pungKongObj = undefined;
    handState.player.main.sort(sortArray);

    return (
      <Hand
        discardTile={this.discardTile}
        handleDrawTile={() => this.handleDrawTile()}
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

    // console.log(this.state);

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