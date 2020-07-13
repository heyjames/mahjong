import React from 'react';
import Button from './button';

const Flowers = ({player, playerNum}) => {
  let styleFlowerTiles = {
    backgroundColor: "white",
    marginBottom: "2px",
    width: "130px"
  };
  
  return (
    <React.Fragment>
      {player.flowers.length > 0
        && <div style={{ paddingTop: "20px" }}>
          {player.flowers.map((tile, index) => {
            if (tile.code === player.newTile.code) {
              styleFlowerTiles.backgroundColor = "lightseagreen";
              styleFlowerTiles.color = "white";
            } else {
              styleFlowerTiles.backgroundColor = "white";
              styleFlowerTiles.color = "black";
            }

            return (
              <Button
                key={index}
                name={playerNum + "_" + tile.code}
                label={tile.label}
                css={styleFlowerTiles}
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