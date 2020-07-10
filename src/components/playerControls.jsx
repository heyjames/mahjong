import React from 'react';
import Button from './button';

const PlayerControls = ({
  handleDrawTile,
  disableDrawTileBtn,
  handleExposeTileSet,
  playerTurn,
  pungBgColor,
  pung,
  kong,
  disablePungButton,
  disableKongButton,
  kongBgColor
}) => {
  return (
    <React.Fragment>
      <Button
        name="drawTile"
        label="Draw Tile"
        onClick={handleDrawTile}
        disabled={disableDrawTileBtn}
      />
      <Button
        name="pung"
        label="Pung"
        onClick={() => handleExposeTileSet(playerTurn, pung)}
        disabled={disablePungButton}
        css={{ backgroundColor: pungBgColor }}
      />
      <Button
        name="kong"
        label="Kong"
        onClick={() => handleExposeTileSet(playerTurn, kong)}
        disabled={disableKongButton}
        css={{ backgroundColor: kongBgColor }}
      />
    </React.Fragment>
  );
}
 
export default PlayerControls;