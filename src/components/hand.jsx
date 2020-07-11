import React from 'react';
import Button from './button';
import _ from 'lodash';
import ExposedTileSets from './exposedTileSets';
import ChowButton from './chowButton';
import PlayerControls from './playerControls';
import Flowers from './flowers';

const Hand = ({
  discardTile,
  handleDrawTile,
  handleExposeTileSet,
  data
}) => {
  let {
    player,
    playerNum,
    turn,
    playerTurn,
    disableDiscardButton,
    disableChowButton,
    disablePungButton,
    disableKongButton,
    disableDrawTileBtn,
    pungBgColor,
    kongBgColor,
    chowBgColor,
    pung,
    kong,
    rightJoinChow,
    leftJoinChow,
    middleJoinChow,
    bgColor = "purple",
  } = data;

  // console.log(data);

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
          <PlayerControls
            handleDrawTile={handleDrawTile}
            disableDrawTileBtn={disableDrawTileBtn}
            handleExposeTileSet={handleExposeTileSet}
            playerTurn={playerTurn}
            pungBgColor={pungBgColor}
            pung={pung}
            kong={kong}
            disablePungButton={disablePungButton}
            disableKongButton={disableKongButton}
            kongBgColor={kongBgColor}
          />
        </div>

        <div>Tile Count: {player.main.length}</div>
      </div>
      {player.main.map((tile, index) => {
        bgColor = (tile.code === player.newTile.code) ? "lightseagreen" : "lightblue";
        if (tile.code === player.newTile.code) {
          // console.log(player.newTile);
          console.log(bgColor);
        }
        
        return (
          <React.Fragment key={index}>
            <Button
              name={playerNum}
              label={tile.label}
              onClick={() => discardTile(tile.code, playerNum)}
              disabled={disableDiscardButton}
              css={{ backgroundColor: bgColor, marginBottom: "2px", width: "130px" }}
            />
            <ChowButton
              label="R-C"
              name="r-chow"
              chowArray={rightJoinChow}
              playerTurn={playerTurn}
              turn={turn}
              tile={tile}
              disableChowButton={disableChowButton}
              chowBgColor={chowBgColor}
              handleExposeTileSet={handleExposeTileSet}
            />
            <ChowButton
              label="L-C"
              name="l-chow"
              chowArray={leftJoinChow}
              playerTurn={playerTurn}
              turn={turn}
              tile={tile}
              disableChowButton={disableChowButton}
              chowBgColor={chowBgColor}
              handleExposeTileSet={handleExposeTileSet}
            />
            <ChowButton
              label="M-C"
              name="m-chow"
              chowArray={middleJoinChow}
              playerTurn={playerTurn}
              turn={turn}
              tile={tile}
              disableChowButton={disableChowButton}
              chowBgColor={chowBgColor}
              handleExposeTileSet={handleExposeTileSet}
            />
          </React.Fragment>
        )
      })}

      <ExposedTileSets
        player={player}
        playerNum={playerNum}
        styleChowPungKongTiles={styleChowPungKongTiles}
      />

      <Flowers
        player={player}
        playerNum={playerNum}
        styleChowPungKongTiles={styleChowPungKongTiles}
      />

    </div>
  );
}

export default Hand;