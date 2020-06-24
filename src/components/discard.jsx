import React from 'react';
import Button from './button';
import _ from 'lodash';

const Discard = ({
  player,
  playerNum
}) => {
  return (
    <div style={{ float: "left", width: "220px", backgroundColor: "lightyellow" }}>
      <div style={{ paddingBottom: "16px" }}>
        <div>{playerNum}</div>
        <div>Tile Count: {player.main.length}</div>
      </div>

      {player.main.map((tile, index) => {
        const bgColor = (tile.code === player.recentDiscard.code)
          ? "lightseagreen"
          : null;

        return (
          <Button
            key={index}
            name={tile.code}
            label={tile.label}
            css={{ backgroundColor: bgColor, width: "140px" }}
          />
        )
      })}
    </div>
  );
}

export default Discard;