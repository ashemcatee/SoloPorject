import React from 'react';
import Row from '../row.jsx'; 

const MainContainer = () => {
  const rows = Array.from({length:6}, (_,index)=><Row key={index} />);

    return (
      <div className="main-container">
        
        {rows}
      </div>
    );
  };
  
  export default MainContainer;