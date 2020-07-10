import React from 'react';
import Button from './button';

const ExposedTileSets = ({ player, playerNum, styleChowPungKongTiles }) => {
  return (
    <React.Fragment>
      {player.chowPungKong.length >= 3
        && <div style={{ paddingTop: "20px" }}>
          {player.chowPungKong.map((tile, index) => {
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
 
export default ExposedTileSets;