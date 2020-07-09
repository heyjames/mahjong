import React from 'react';
import Button from './button';
import _ from 'lodash';

const Hand = ({
  player,
  playerTurn,
  discardTile,
  playerNum,
  bgColor = "lightblue",
  turn,
  handleDrawTile,
  hasDrawnTile,
  disableDiscardButton,
  disablePungButton,
  disableChowButton,
  discardPile,
  disableKongButton,
  handleExposeTileSet,
  disableDrawTileBtn,
  pung,
  pungBgColor,
  kong,
  kongBgColor,
  rightJoinChow,
  chowBgColor,
  leftJoinChow,
  middleJoinChow
}) => {

  let styleChowPungKongTiles = {
    backgroundColor: "white",
    marginBottom: "2px",
    width: "130px"
  };

  let highlightPlayerTurn = (playerTurn === turn) ? "lightgreen" : null;

  // if (playerTurn === turn) console.log(disableDrawTileBtn);

  return (
    <div style={{ float: "left", width: "230px", backgroundColor: highlightPlayerTurn }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        <div>
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
        </div>

        <div>Tile Count: {player.main.length}</div>
      </div>
      {player.main.map((tile, index) => {
        bgColor = (tile.code === player.newTile.code) ? "lightseagreen" : "lightblue";

        return (
          <React.Fragment key={index}>
            <Button
              name={playerNum}
              label={tile.label}
              onClick={() => discardTile(tile.code, playerNum)}
              disabled={disableDiscardButton}
              css={{ backgroundColor: bgColor, marginBottom: "2px", width: "130px" }}
            />
            {(rightJoinChow.length === 2)
              && (tile.code === rightJoinChow[0].code || tile.code === rightJoinChow[1].code)
              && <Button
                name="r-chow"
                label="R-C"
                onClick={() => handleExposeTileSet(playerTurn, rightJoinChow)}
                disabled={disableChowButton}
                css={{ backgroundColor: chowBgColor }}
              />
            }
            {(leftJoinChow.length === 2)
              && (tile.code === leftJoinChow[0].code || tile.code === leftJoinChow[1].code)
              && <Button
                name="l-chow"
                label="L-C"
                onClick={() => handleExposeTileSet(playerTurn, leftJoinChow)}
                disabled={disableChowButton}
                css={{ backgroundColor: chowBgColor }}
              />
            }
            {(middleJoinChow.length === 2)
              && (tile.code === middleJoinChow[0].code || tile.code === middleJoinChow[1].code)
              && <Button
                name="m-chow"
                label="M-C"
                css={{ backgroundColor: chowBgColor }}
                onClick={() => handleExposeTileSet(playerTurn, middleJoinChow)}
                disabled={disableChowButton}
              />
            }
          </React.Fragment>
        )
      })}

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
        </div>}

    </div>
  );
}

export default Hand;