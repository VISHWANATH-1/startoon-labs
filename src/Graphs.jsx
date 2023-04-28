import React from 'react'
function Rectangle() {
    const rectangleStyle = {
        width: "101px",
        height: "275px",
        background: "#008CFF",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
    };
  
    return (
           <div style={rectangleStyle}></div>      
    );
  }
  function Rectangle2() {
    const rectangleStyle = {
        width: "101px",
        height: "275px",
        background: "linear-gradient(360deg, #C2E3FF 25.64%, #008CFF 100%)",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
    };
  
    return (
      <div style={rectangleStyle}></div>
    );
  }
  
  function Circle() {
    const circleStyle = {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: 'blue'
    };
  
    return (
      <div style={circleStyle}></div>
    );
  }
  
const Graphs = () => {
 
  return (
    <> 
      <div className="header">
        <h2>Graph</h2>
      </div>
      <div className='graph'>
        <Rectangle />
        <h2>70%</h2>
        <p>Level 1</p>
        <Circle/>
        <p>Level 2</p>
        <Rectangle2/>
        <h2>70%</h2>
        <p>Level 3</p>
      </div>
    </>
  )
}

export default Graphs