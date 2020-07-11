import React from 'react';
import Button from './button';

const ChowButton = ({
  chowArray,
  playerTurn,
  hasDrawnTile,
  turn,
  tile,
  label,
  name,
  disableChowButton,
  chowBgColor,
  handleExposeTileSet
}) => {
  return (
    <React.Fragment>
      {(chowArray.length === 2)
        && (hasDrawnTile === false)
        && (playerTurn === turn)
        && (tile.code === chowArray[0].code || tile.code === chowArray[1].code)
        && <Button
          name={name}
          label={label}
          css={{ backgroundColor: chowBgColor }}
          onClick={() => handleExposeTileSet(playerTurn, chowArray)}
          disabled={disableChowButton}
        />
      }
    </React.Fragment>
  );
}
 
export default ChowButton;