class PungKong {
  addSameTilesInHandToPungArray = (handState) => {
    handState.pung = handState.player.main.filter(tile => {
      return tile.code.includes(handState.prefix + handState.tileIndex)
    });
  }

  addSameTilesInHandToKongArray = (handState) => {
    handState.kong = handState.player.main.filter(tile => {
      return tile.code.includes(handState.prefix + handState.tileIndex)
    });
  }

  canPung = (handState) => {
    if (handState.pung.length === 2) {
      handState.disablePungButton = false;
      handState.pungBgColor = "red";
    } else {
      handState.disablePungButton = true;
    }

    return handState;
  }

  canKong = (handState) => {
    if (handState.kong.length === 3) {
      handState.disableKongButton = false;
      handState.kongBgColor = "red";
    } else {
      handState.disableKongButton = true;
    }

    return handState;
  }

  handlePung = (handState) => {
    this.addSameTilesInHandToPungArray(handState);
    handState = this.canPung(handState);

    return handState;
  }

  handleKong = (handState) => {
    this.addSameTilesInHandToKongArray(handState);
    handState = this.canKong(handState);

    return handState;
  }

  disablePungKongAfterDrawingTile = (handState, hasDrawnTile) => {
    if (handState.playerTurn === handState.turn) {
      if (hasDrawnTile) {
        handState.disablePungButton = true;
        handState.disableKongButton = true;
        handState.pungBgColor = null;
        handState.kongBgColor = null;
      }
    }

    return handState;
  }

  preventPlayerPungKongOwnDiscards = (handState, discardPile) => {
    if (discardPile.recentDiscard.prevOwner === handState.playerNum) {
      handState.disablePungButton = true;
      handState.disableKongButton = true;
      handState.pungBgColor = null;
      handState.kongBgColor = null;
    }

    return handState;
  }
}

export default PungKong;