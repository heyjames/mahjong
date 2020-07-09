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


  // let playerTurn = parseInt(playerNum.slice(-1));
  // let disableDrawTileBtn = null;

  // if (playerTurn === turn) {
  //   if (hasDrawnTile === false) {
  //     disableDrawTileBtn = false;
  //   } else {
  //     disableDrawTileBtn = true;
  //   }

  //   disableDrawTileBtn = (player.main.length >= 14) ? true : false;

  //   player.main.sort(sortTilesInHand);
  // } else {
  //   disableDiscardButton = true;
  //   disableDrawTileBtn = true;
  // }






  let highlightPlayerTurn = (playerTurn === turn) ? "lightgreen" : null;

  // let pungBgColor = null;
  // let kongBgColor = null;
  // let chowBgColor = null;


  // const recentDiscardCode = _.get(discardPile, "recentDiscard.code");
  // let pung = [];
  // let kong = [];
  // const rightJoinChow = [];
  // const leftJoinChow = [];
  // const middleJoinChow = [];

  // if (recentDiscardCode) {
  //   const currentPlayerHand = player.main;

  //   // Right Join Chow
  //   const tileIndex = recentDiscardCode.charAt(3);
  //   const plusOne = parseInt(tileIndex) + 1;
  //   const plusTwo = parseInt(tileIndex) + 2;
  //   const prefix = recentDiscardCode.substring(0, 3);

  //   const rightJoinChow1 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + plusOne)
  //   });
  //   const rightJoinChow2 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + plusTwo)
  //   });
  //   if (rightJoinChow1) rightJoinChow.push(rightJoinChow1);
  //   if (rightJoinChow2) rightJoinChow.push(rightJoinChow2);

  //   if (playerTurn === turn && rightJoinChow.length === 2) {
  //     disableChowButton = false;
  //     chowBgColor = "lightcoral";
  //   }

  //   // Left Join Chow
  //   const minusOne = parseInt(tileIndex) - 1;
  //   const minusTwo = parseInt(tileIndex) - 2;

  //   const leftJoinChow1 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + minusOne)
  //   });
  //   const leftJoinChow2 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + minusTwo)
  //   });
  //   if (leftJoinChow1) leftJoinChow.push(leftJoinChow1);
  //   if (leftJoinChow2) leftJoinChow.push(leftJoinChow2);

  //   if (playerTurn === turn && leftJoinChow.length === 2) {
  //     disableChowButton = false;
  //     chowBgColor = "lightcoral";
  //   }

  //   // Middle Join Chow
  //   const left = parseInt(tileIndex) - 1;
  //   const right = parseInt(tileIndex) + 1;

  //   const middleJoinChow1 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + left)
  //   });
  //   const middleJoinChow2 = currentPlayerHand.find(tile => {
  //     return tile.code.includes(prefix + right)
  //   });

  //   if (playerTurn === turn) {
  //     if (middleJoinChow1) {
  //       middleJoinChow.push(middleJoinChow1);
  //     }
  //     if (middleJoinChow2) {
  //       middleJoinChow.push(middleJoinChow2);
  //     }
  //   }

  //   if (playerTurn === turn && middleJoinChow.length === 2) {
  //     disableChowButton = false;
  //     chowBgColor = "lightcoral";
  //   }

  //   pung = player.main.filter(tile => {
  //     return tile.code.includes(prefix + tileIndex)
  //   });

  //   if (pung.length === 2) {
  //     disablePungButton = false;
  //     pungBgColor = "red";
  //   }

  //   kong = player.main.filter(tile => {
  //     return tile.code.includes(prefix + tileIndex)
  //   });

  //   if (kong.length === 3) {
  //     disableKongButton = false;
  //     kongBgColor = "red";
  //   }
  // }












  // // Prevent pung/kong after current player decided to draw a tile
  // if (playerTurn === turn) {
  //   if (hasDrawnTile) {
  //     disablePungButton = true;
  //     disableKongButton = true;
  //     pungBgColor = null;
  //     kongBgColor = null;
  //   }
  // }

  // // So user can't pung/kong their own discarded tile
  // if (discardPile.recentDiscard.prevOwner === playerNum) {
  //   disablePungButton = true;
  //   disableKongButton = true;
  //   pungBgColor = null;
  //   kongBgColor = null;
  // }























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