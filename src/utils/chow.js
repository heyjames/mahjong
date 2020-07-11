class Chow {
  addChowTilesInHandToChowTypeArray = (chowType, prefix, suffix1, suffix2, currentPlayerHand) => {
    const chowMatch1 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + suffix1)
    });
    
    const chowMatch2 = currentPlayerHand.find(tile => {
      return tile.code.includes(prefix + suffix2)
    });

    if (chowMatch1) chowType.push(chowMatch1);
    if (chowMatch2) chowType.push(chowMatch2);
  }

  canRightChow = (handState) => {
    if (handState.playerTurn === handState.turn && handState.rightJoinChow.length === 2) {
      handState.disableChowButton = false;
      handState.chowBgColor = "lightcoral";
    }

    return handState;
  }

  canLeftChow = (handState) => {
    if (handState.playerTurn === handState.turn && handState.leftJoinChow.length === 2) {
      handState.disableChowButton = false;
      handState.chowBgColor = "lightcoral";
    }

    return handState;
  }

  canMiddleChow = (handState) => {
    if (handState.playerTurn === handState.turn && handState.middleJoinChow.length === 2) {
      handState.disableChowButton = false;
      handState.chowBgColor = "lightcoral";
    }

    return handState;
  }

  handleRightJoinChow = (handState) => {
    handState.plusOne = parseInt(handState.tileIndex) + 1;
    handState.plusTwo = parseInt(handState.tileIndex) + 2;
    this.addChowTilesInHandToChowTypeArray(handState.rightJoinChow, handState.prefix, handState.plusOne, handState.plusTwo, handState.player.main);
    handState = this.canRightChow(handState);

    return handState;
  }

  handleLeftJoinChow = (handState) => {
    handState.minusOne = parseInt(handState.tileIndex) - 1;
    handState.minusTwo = parseInt(handState.tileIndex) - 2;
    this.addChowTilesInHandToChowTypeArray(handState.leftJoinChow, handState.prefix, handState.minusOne, handState.minusTwo, handState.player.main);
    handState = this.canLeftChow(handState);

    return handState;
  }

  handleMiddleJoinChow = (handState) => {
    handState.left = parseInt(handState.tileIndex) - 1;
    handState.right = parseInt(handState.tileIndex) + 1;
    this.addChowTilesInHandToChowTypeArray(handState.middleJoinChow, handState.prefix, handState.left, handState.right, handState.player.main);
    handState = this.canMiddleChow(handState);

    return handState;
  }
}

export default Chow;