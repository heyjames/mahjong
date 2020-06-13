import React from 'react';
// import Button from './button';
// import _ from 'lodash';

const sortTilesInHand = (a, b) => {
  const nameA = a.code.substring(0, 5).toUpperCase();
  const nameB = b.code.substring(0, 5).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0; // names must be equal
}

const Hand = ({ player, onClick = null, playerNum, bgColor = "lightblue", turn, color, handleDrawTile, hasDrawnTile }) => {
  let disableDiscardTileBtn = true;
  let playerTurn = parseInt(playerNum.slice(-1));
  let disableDrawTileBtn = null;

  if (playerTurn === turn) {
    disableDiscardTileBtn = false;

    if (hasDrawnTile === false) {
      disableDiscardTileBtn = true;
      disableDrawTileBtn = false;
    } else {
      disableDiscardTileBtn = false;
      disableDrawTileBtn = true;
    }

    disableDrawTileBtn = (player.main.length >= 14) ? true : false;

    player.main.sort(sortTilesInHand);
  } else {
    disableDiscardTileBtn = true;
    disableDrawTileBtn = true;
  }

  let highlightPlayerTurn = (playerTurn === turn) ? "lightgreen" : null;

  return (
    <span style={{ float: "left", width: "160px", backgroundColor: highlightPlayerTurn }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        {/* <Button name="drawTile" label="Draw Tile" onClick={handleDrawTile} disableDrawTileBtn={disableDrawTileBtn} /> */}
        <button name="drawTile" onClick={handleDrawTile} disabled={disableDrawTileBtn}>
          Draw Tile
        </button>
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
            disabled={disableDiscardTileBtn}
          >
            {tile.label}
          </button>
        )
      })}

    </span>
  );
}

export default Hand;