import React from 'react';
import Button from './button';
import _ from 'lodash';

const sortTilesInHand = (a, b) => {
  const nameA = a.code.substring(0, 5).toUpperCase();
  const nameB = b.code.substring(0, 5).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0; // names must be equal
}

const Hand = ({ player, onClick = null, playerNum, bgColor = "lightblue", turn, color, handleDrawTile, hasDrawnTile, discard=false }) => {
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
      console.log("Fired!");
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
        Tiles in Hand: {player.main.length}
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
      
      {player.newTile && <button
            name={playerNum}
            style={{ backgroundColor: "lightseagreen", marginBottom: "2px", width: "120px", color }}
            onClick={() => onClick(player.newTile.code, playerNum)}
            disabled={disabled}
          >
            {player.newTile.label}
          </button>}
      {discard && <button name={playerNum} style={{ backgroundColor: bgColor, marginBottom: "2px", width: "120px", color }} disabled={disabled}>{player.recentDiscard.label}</button>}
    </span>
  );
}

export default Hand;