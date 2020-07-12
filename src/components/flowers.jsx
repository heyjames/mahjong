import React from 'react';
import Button from './button';

const Flowers = ({player, playerNum, styleChowPungKongTiles}) => {
  return (
    <React.Fragment>
      {player.flowers.length > 0
        && <div style={{ paddingTop: "20px" }}>
          {player.flowers.map((tile, index) => {
            if (tile.code === player.newTile.code) {
              styleChowPungKongTiles.backgroundColor = "lightseagreen";
              styleChowPungKongTiles.color = "white";
            } else {
              styleChowPungKongTiles.backgroundColor = "white";
              styleChowPungKongTiles.color = "black";
            }
            
            return (
              <Button
                key={index}
                name={playerNum + "_" + tile.code}
                label={tile.label}
                css={styleChowPungKongTiles}
                disabled={true}
              />
            )
          })}
        </div>
      }
    </React.Fragment>
  );
}
 
export default Flowers;