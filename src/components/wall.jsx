import React from 'react';

const Wall = ({ tiles, end }) => {
  return (
    <React.Fragment>
      <span style={{ float: "left", width: "170px" }}>
        {tiles.map((tile, index) => {
          return (
            <div key={index} style={{ backgroundColor: "lightgray" }}>
              {(index > (end - (18 + 1))) && (index < end) && (`${index} ${tile.label}`)}
            </div>
          )
        })}
      </span>
    </React.Fragment>
  );
}

export default Wall;