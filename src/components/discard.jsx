import React from 'react';
import _ from 'lodash';

const Discard = ({
  player,
  onClick = null,
  playerNum,
  bgColor = "lightblue",
  turn,
  color,
  handleDrawTile,
  hasDrawnTile,
  handleChow,
  handlePung,
  disableChowButton,
  disablePungButton,
  discardPile,
  state
}) => {
  // Implement chow toggle logic
  // let's say i have a barrel 6
  // left join = barrel 4,5
  // right join = barrel 7,8
  // middle join = barrle 5,7
  // console.log(player.main);
  // disableChowButton = false;



  // console.log(player1.main[i].code === "dot5" && player1.main[i].code === "dot6");


  if (state["player" + state.turn]) {
    const recentDiscardCode = _.get(discardPile, "recentDiscard.code");
    const currentPlayerHand = state["player" + state.turn].main;

    if (recentDiscardCode) {
      // Right Join Chow
      const tileIndex = recentDiscardCode.charAt(3);
      const plusOne = parseInt(tileIndex) + 1;
      const plusTwo = parseInt(tileIndex) + 2;
      const prefix = recentDiscardCode.substring(0, 3);

      const rightJoinChow = [];
      const rightJoinChow1 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + plusOne)
      });
      const rightJoinChow2 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + plusTwo)
      });
      if (rightJoinChow1) rightJoinChow.push(rightJoinChow1);
      if (rightJoinChow2) rightJoinChow.push(rightJoinChow2);
      console.log(rightJoinChow);
      console.log(rightJoinChow.length);

      if (rightJoinChow.length === 2) disableChowButton = false;






      // Left Join Chow
      // const tileIndex = recentDiscardCode.charAt(3);
      const minusOne = parseInt(tileIndex) - 1;
      const minusTwo = parseInt(tileIndex) - 2;
      // const prefix = recentDiscardCode.substring(0, 3);

      const leftJoinChow = [];
      const leftJoinChow1 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + minusOne)
      });
      const leftJoinChow2 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + minusTwo)
      });
      if (leftJoinChow1) leftJoinChow.push(leftJoinChow1);
      if (leftJoinChow2) leftJoinChow.push(leftJoinChow2);
      console.log(leftJoinChow);
      console.log(leftJoinChow.length);

      if (leftJoinChow.length === 2) disableChowButton = false;
      if (rightJoinChow.length === 2) disableChowButton = false;






      // Middle Join Chow
      // const tileIndex = recentDiscardCode.charAt(3);
      const left = parseInt(tileIndex) - 1;
      const right = parseInt(tileIndex) + 1;
      // const prefix = recentDiscardCode.substring(0, 3);

      const middleJoinChow = [];
      const middleJoinChow1 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + left)
      });
      const middleJoinChow2 = currentPlayerHand.find(tile => {
        return tile.code.includes(prefix + right)
      });
      if (middleJoinChow1) middleJoinChow.push(middleJoinChow1);
      if (middleJoinChow2) middleJoinChow.push(middleJoinChow2);
      console.log(middleJoinChow);
      console.log(middleJoinChow.length);

      if (middleJoinChow.length === 2) disableChowButton = false;





      // Pung
      const pung = currentPlayerHand.filter(tile => {
        return tile.code.includes(prefix + tileIndex)
      });
      // console.log('pung: ');
      // console.log(pung);

      if (pung.length === 2) disablePungButton = false;
    }

  }

  return (
    <span style={{ float: "left", width: "220px", backgroundColor: "lightyellow" }}>
      <div style={{ paddingBottom: "16px" }}>
        {playerNum}
        <button name="drawTile" onClick={handleDrawTile} disabled={true}>
          Draw Tile
        </button>
        Tiles in Hand: {player.main.length}
      </div>

      {player.main.map((tile, index) => {
        let discardBgColor = (tile.code === player.recentDiscard.code) ? "lightseagreen" : null;

        return (
          <React.Fragment key={index}>
            <button style={{ backgroundColor: discardBgColor, width: "130px" }}>{tile.label}</button>
            {tile.code === player.recentDiscard.code && <button key={"a" + index} style={{ backgroundColor: discardBgColor, width: "24px" }} onClick={() => handleChow(tile.code)} disabled={disableChowButton}>C</button>}
            {tile.code === player.recentDiscard.code && <button key={"b" + index} style={{ backgroundColor: discardBgColor, width: "24px" }} onClick={() => handlePung(tile.code)} disabled={disablePungButton}>P</button>}
          </React.Fragment>
        )
      })}
    </span>
  );
}

export default Discard;