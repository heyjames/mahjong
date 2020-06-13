import React from 'react';
// import _ from 'lodash';

const Discard = ({
  player,
  onClick = null,
  playerNum,
  bgColor = "lightblue",
  turn,
  color,
  handleDrawTile,
  hasDrawnTile
}) => {
  return (
    <span style={{ float: "left", width: "160px", backgroundColor: "lightgreen" }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        {/* <Button name="drawTile" label="Draw Tile" onClick={handleDrawTile} disableDrawTileBtn={disableDrawTileBtn} /> */}
        <button name="drawTile" onClick={handleDrawTile} disabled={true}>
          Draw Tile
        </button>
        Tiles in Hand: {player.main.length}
      </div>

      {player.main.map((tile, index) => {
        let discardBgColor = (tile.code === player.recentDiscard.code) ? "lightseagreen" : null;
        return (
          <button key={index} style={{ backgroundColor: discardBgColor, width: "130px" }}>{tile.label}</button>
        )
      })}
    </span>
  );
}

export default Discard;