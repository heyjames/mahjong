import React from 'react';
// import Button from './button';
import _ from 'lodash';

const sortTilesInHand = (a, b) => {
  const nameA = a.code.substring(0, 5).toUpperCase();
  const nameB = b.code.substring(0, 5).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0; // names must be equal
}

const Hand = ({
  player,
  onClick = null,
  playerNum,
  bgColor = "lightblue",
  turn,
  color,
  handleDrawTile,
  hasDrawnTile,
  disableDiscardButton,
  handlePung,
  disablePungButton,
  disableChowButton,
  discardPile,
  handleChow
}) => {

  let playerTurn = parseInt(playerNum.slice(-1));
  let disableDrawTileBtn = null;

  if (playerTurn === turn) {
    if (hasDrawnTile === false) {

      disableDrawTileBtn = false;
    } else {
      disableDrawTileBtn = true;
    }

    disableDrawTileBtn = (player.main.length >= 14) ? true : false;

    player.main.sort(sortTilesInHand);
  } else {
    disableDiscardButton = true;
    disableDrawTileBtn = true;
  }

  let highlightPlayerTurn = (playerTurn === turn) ? "lightgreen" : null;

  let pungBgColor = null;
  let chowBgColor = null;

  // Pung
  const recentDiscardCode = _.get(discardPile, "recentDiscard.code");
  if (recentDiscardCode) {



    // const currentPlayerHand = state["player" + state.turn].main;
    const currentPlayerHand = player.main;
    // Right Join Chow
    const tileIndex = recentDiscardCode.charAt(3);
    const plusOne = parseInt(tileIndex) + 1;
    const plusTwo = parseInt(tileIndex) + 2;
    const prefix = recentDiscardCode.substring(0, 3);

    const rightJoinChow = [];
    const rightJoinChow1 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + plusOne)
    });
    const rightJoinChow2 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + plusTwo)
    });
    if (rightJoinChow1) rightJoinChow.push(rightJoinChow1);
    if (rightJoinChow2) rightJoinChow.push(rightJoinChow2);
    // console.log(rightJoinChow);
    // console.log(rightJoinChow.length);

    if (playerTurn === turn && rightJoinChow.length === 2) {
      disableChowButton = false;
      chowBgColor = "lightcoral";
    }






    // Left Join Chow
    // const tileIndex = recentDiscardCode.charAt(3);
    const minusOne = parseInt(tileIndex) - 1;
    const minusTwo = parseInt(tileIndex) - 2;
    // const prefix = recentDiscardCode.substring(0, 3);

    const leftJoinChow = [];
    const leftJoinChow1 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + minusOne)
    });
    const leftJoinChow2 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + minusTwo)
    });
    if (leftJoinChow1) leftJoinChow.push(leftJoinChow1);
    if (leftJoinChow2) leftJoinChow.push(leftJoinChow2);
    // console.log(leftJoinChow);
    // console.log(leftJoinChow.length);

    if (playerTurn === turn && leftJoinChow.length === 2) {
      disableChowButton = false;
      chowBgColor = "lightcoral";
    }






    // Middle Join Chow
    // const tileIndex = recentDiscardCode.charAt(3);
    const left = parseInt(tileIndex) - 1;
    const right = parseInt(tileIndex) + 1;
    // const prefix = recentDiscardCode.substring(0, 3);

    const middleJoinChow = [];
    const middleJoinChow1 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + left)
    });
    const middleJoinChow2 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + right)
    });
    if (middleJoinChow1) middleJoinChow.push(middleJoinChow1);
    if (middleJoinChow2) middleJoinChow.push(middleJoinChow2);
    // console.log(middleJoinChow);
    // console.log(middleJoinChow.length);

    if (playerTurn === turn && middleJoinChow.length === 2) {
      disableChowButton = false;
      chowBgColor = "lightcoral";
    }


















    // const tileIndex = recentDiscardCode.charAt(3);
    // const prefix = recentDiscardCode.substring(0, 3);
    const pung = player.main.filter(tile => {
      return tile.code.includes(prefix + tileIndex)
    });
    console.log('pung: ');
    console.log(pung);

    if (pung.length === 2) {
      disablePungButton = false;
      pungBgColor = "red";
    }
  }

  return (
    <span style={{ float: "left", width: "160px", backgroundColor: highlightPlayerTurn }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        {/* <Button name="drawTile" label="Draw Tile" onClick={handleDrawTile} disableDrawTileBtn={disableDrawTileBtn} /> */}
        <button name="drawTile" onClick={handleDrawTile} disabled={disableDrawTileBtn}>
          Draw Tile
        </button>

        <button name="pung" style={{ backgroundColor: pungBgColor }} onClick={() => handlePung(playerTurn)} disabled={disablePungButton}>
          Pung
        </button>
        <button style={{ backgroundColor: chowBgColor }} onClick={handleChow} disabled={disableChowButton}>Chow</button>
        Tiles in Hand: {player.main.length}
      </div>
      {player.main.map((tile, index) => {
        bgColor = (tile.code === player.newTile.code) ? "lightseagreen" : "lightblue";

        return (
          <button
            key={index}
            name={playerNum}
            style={{ backgroundColor: bgColor, marginBottom: "2px", width: "130px", color }}
            onClick={() => onClick(tile.code, playerNum)}
            disabled={disableDiscardButton}
          >
            {tile.label}
          </button>
        )
      })}

    </span>
  );
}

export default Hand;