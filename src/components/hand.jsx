import React from 'react';

const Hand = ({ player, onClick = null, bgColor = "lightblue" }) => {
  return (
    <span style={{ float: "left", width: "170px" }}>
      {player.map((tile, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: bgColor, marginBottom: "2px" }}
            onClick={() => onClick(tile.code)}
          >
            {tile.label}
          </div>
        )
      })}
    </span>
  );
}

export default Hand;