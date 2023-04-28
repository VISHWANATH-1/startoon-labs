import React from "react";
import "./Mystyle.css";
import Graphs from "./Graphs";
function App() {
  return (
    <>
      <div className="main">
        <div className="left">
            <h2 className="header">Enter Values</h2>
          <div className="input">
            <input type="number" placeholder="Input Values" />
            <input type="number" placeholder="Max Value" />
          </div>
        </div>

        <div className="right">
            <h2 className="header">Selection colors</h2>
             <table className="tablestyle">
                <td>
                  <tr>FFFFFF</tr>
                  <tr>C2E3FF</tr>
                  <tr>008CFF</tr>
                  <tr>003F73</tr>
                </td>
                <td>
                  <tr>100%</tr>
                  <tr>100%</tr>
                  <tr>100%</tr>
                  <tr>100%</tr>
                </td>
             </table>
        </div>
      </div>

      <Graphs />
    </>
  );
}

export default App;
