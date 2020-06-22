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
  handleChowLeft,
  handleChowMiddle,
  handleChowRight,
  disableKongButton,
  handleKong
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
  let kongBgColor = null;
  let chowBgColor = null;


  const recentDiscardCode = _.get(discardPile, "recentDiscard.code");
  let pung = [];
  let kong = [];
  const rightJoinChow = [];
  const leftJoinChow = [];
  const middleJoinChow = [];

  if (recentDiscardCode) {
    const currentPlayerHand = player.main;
    // console.log(turn);
    // console.log(currentPlayerHand);
    // Right Join Chow
    const tileIndex = recentDiscardCode.charAt(3);
    const plusOne = parseInt(tileIndex) + 1;
    const plusTwo = parseInt(tileIndex) + 2;
    const prefix = recentDiscardCode.substring(0, 3);

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
    // console.log(prefix + left);
    // console.log(prefix + right);
    // console.log(currentPlayerHand);

    const middleJoinChow1 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + left)
    });
    const middleJoinChow2 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + right)
    });
    // if (playerTurn === turn) console.log(middleJoinChow1);
    // if (playerTurn === turn) console.log(middleJoinChow2);

    if (playerTurn === turn) {
      if (middleJoinChow1) {
        middleJoinChow.push(middleJoinChow1);
        // console.log("what?");
      }
      if (middleJoinChow2) {
        middleJoinChow.push(middleJoinChow2);
        // console.log("Chicken?");
      }
      // console.log(middleJoinChow);
    }

    if (playerTurn === turn && middleJoinChow.length === 2) {
      disableChowButton = false;
      chowBgColor = "lightcoral";
    }


















    // const tileIndex = recentDiscardCode.charAt(3);
    // const prefix = recentDiscardCode.substring(0, 3);
    pung = player.main.filter(tile => {
      return tile.code.includes(prefix + tileIndex)
    });
    // console.log('pung: ');
    // console.log(pung);

    if (pung.length === 2) {
      disablePungButton = false;
      pungBgColor = "red";
    }


    kong = player.main.filter(tile => {
      return tile.code.includes(prefix + tileIndex)
    });
    console.log('kong: ');
    console.log(kong);

    if (kong.length === 3) {
      disableKongButton = false;
      kongBgColor = "red";
    }
  }

  if (playerTurn === turn) {
    if (hasDrawnTile) {
      disablePungButton = true;
      disableKongButton = true;
      pungBgColor = null;
      kongBgColor = null;
    }
  }

  if (discardPile.recentDiscard.prevOwner === playerNum) {
    disablePungButton = true;
    disableKongButton = true;
    pungBgColor = null;
    kongBgColor = null;
  }

  let chowCount = 0;
  let oneChow = [];

  if (rightJoinChow.length > 1) chowCount = chowCount + 1;
  if (leftJoinChow.length > 1) chowCount = chowCount + 1;
  if (middleJoinChow.length > 1) chowCount = chowCount + 1;
  // if (playerTurn === turn) console.log(chowCount);
  if (chowCount === 1) {
    if (rightJoinChow.length > 1) oneChow = [...rightJoinChow];
    if (leftJoinChow.length > 1) oneChow = [...leftJoinChow];
    if (middleJoinChow.length > 1) oneChow = [...middleJoinChow];
  }



  if (playerTurn === turn) {
    // console.log(chowCount);
    // console.log(rightJoinChow);
    // console.log(discardPile.recentDiscard.code);
  }

  return (
    <div style={{ float: "left", width: "230px", backgroundColor: highlightPlayerTurn }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        {/* <Button name="drawTile" label="Draw Tile" onClick={handleDrawTile} disableDrawTileBtn={disableDrawTileBtn} /> */}
        <button name="drawTile" onClick={handleDrawTile} disabled={disableDrawTileBtn}>
          Draw Tile
        </button>

        <button name="pung" style={{ backgroundColor: pungBgColor }} onClick={() => handlePung(playerTurn, pung)} disabled={disablePungButton}>
          Pung
        </button>
        <button name="kong" style={{ backgroundColor: kongBgColor }} onClick={() => handleKong(playerTurn, kong)} disabled={disableKongButton}>
          Kong
        </button>
        {(rightJoinChow.length === 2) && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowRight(rightJoinChow)} disabled={disableChowButton}>R-Chow</button>}
        {(leftJoinChow.length === 2) && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowLeft(leftJoinChow)} disabled={disableChowButton}>L-Chow</button>}
        {(middleJoinChow.length === 2) && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowMiddle(middleJoinChow)} disabled={disableChowButton}>M-Chow</button>}
        Tiles in Hand: {player.main.length}
      </div>
      {player.main.map((tile, index) => {
        bgColor = (tile.code === player.newTile.code) ? "lightseagreen" : "lightblue";

        return (
          <React.Fragment key={index}>
            <button
              name={playerNum}
              style={{ backgroundColor: bgColor, marginBottom: "2px", width: "130px", color }}
              onClick={() => onClick(tile.code, playerNum)}
              disabled={disableDiscardButton}
            >
              {tile.label}
            </button>
            {(rightJoinChow.length === 2)
              && (tile.code === rightJoinChow[0].code || tile.code === rightJoinChow[1].code)
              && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowRight(rightJoinChow)} disabled={disableChowButton}>R-C</button>}
            {(leftJoinChow.length === 2)
              && (tile.code === leftJoinChow[0].code || tile.code === leftJoinChow[1].code)
              && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowLeft(leftJoinChow)} disabled={disableChowButton}>L-C</button>}
            {(middleJoinChow.length === 2)
              && (tile.code === middleJoinChow[0].code || tile.code === middleJoinChow[1].code)
              && <button style={{ backgroundColor: chowBgColor }} onClick={() => handleChowMiddle(middleJoinChow)} disabled={disableChowButton}>M-C</button>}
          </React.Fragment>
        )
      })}

      {player.chowPungKong.length >= 3 && <div style={{ paddingTop: "20px" }}>
        {player.chowPungKong.map((tile, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: "white", marginBottom: "2px", width: "130px", color }}
              disabled={true}
            >
              {tile.label}
            </button>
          )
        })}
      </div>}

    </div>
  );
}

export default Hand;