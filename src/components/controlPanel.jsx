import React from 'react';
import Button from './button';

const ControlPanel = ({tiles, handleShuffle, handleClearMessages, handleReset}) => {
  return ( 
    <React.Fragment>
      <Button
        name="shuffle"
        label="Shuffle"
        onClick={handleShuffle}
      />
      <Button
        name="clearMessages"
        label="Clear Messages"
        onClick={handleClearMessages}
      />
      <Button
        name="reset"
        label="Reset"
        onClick={handleReset}
      />
      <span>Wall Tile Count: {tiles.length}</span>
    </React.Fragment>
   );
}
 
export default ControlPanel;