const addChowTilesInHandToChowTypeArray = (chowType, prefix, suffix1, suffix2, currentPlayerHand) => {
  const chowMatch1 = currentPlayerHand.find(tile => {
    return tile.code.includes(prefix + suffix1)
  });
  
  const chowMatch2 = currentPlayerHand.find(tile => {
    return tile.code.includes(prefix + suffix2)
  });

  if (chowMatch1) chowType.push(chowMatch1);
  if (chowMatch2) chowType.push(chowMatch2);
}

const canRightChow = (handState) => {
  if (handState.playerTurn === handState.turn && handState.rightJoinChow.length === 2) {
    handState.disableChowButton = false;
    handState.chowBgColor = "lightcoral";
  }

  return handState;
}

const canLeftChow = (handState) => {
  if (handState.playerTurn === handState.turn && handState.leftJoinChow.length === 2) {
    handState.disableChowButton = false;
    handState.chowBgColor = "lightcoral";
  }

  return handState;
}

const canMiddleChow = (handState) => {
  if (handState.playerTurn === handState.turn && handState.middleJoinChow.length === 2) {
    handState.disableChowButton = false;
    handState.chowBgColor = "lightcoral";
  }

  return handState;
}

export default {
  addChowTilesInHandToChowTypeArray,
  canRightChow,
  canLeftChow,
  canMiddleChow
};