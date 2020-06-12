import React from 'react';
import Button from './button';

const sortTilesInHand = (a, b) => {
  const nameA = a.code.substring(0, 5).toUpperCase();
  const nameB = b.code.substring(0, 5).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0; // names must be equal
}

const Hand2 = ({ player, onClick = null, playerNum, bgColor = "lightblue", turn, color, handleDrawTile, hasDrawnTile }) => {
  let disabled = true;
  let playerTurn = parseInt(playerNum.slice(-1));
  let disableDrawTileBtn = null;

  if (playerTurn === turn) {
    disabled = false;

    if (hasDrawnTile === false) {
      disabled = true;
      disableDrawTileBtn = false;
    } else {
      disabled = false;
      disableDrawTileBtn = true;
    }

    disableDrawTileBtn = (player.main.length >= 14) ? true : false;

    player.main.sort(sortTilesInHand);
  } else {
    disabled = true;
    disableDrawTileBtn = true;
  }

  let highlightPlayerTurn = (playerTurn === turn) ? "lightgreen" : null;

  return (
    <span style={{ float: "left", width: "160px", backgroundColor: highlightPlayerTurn }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        <Button name="drawTile" label="Draw Tile" onClick={handleDrawTile} disableDrawTileBtn={disableDrawTileBtn} />
        {player.main.length}
      </div>
      {player.main.map((tile, index) => {
        return (
          <button
            key={index}
            name={playerNum}
            style={{ backgroundColor: bgColor, marginBottom: "2px", width: "120px", color }}
            onClick={() => onClick(tile.code, playerNum)}
            disabled={disabled}
          >
            {tile.label}
          </button>
        )
      })}
    </span>
  );
}

export default Hand2;