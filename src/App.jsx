import React from "react";
import "./Mystyle.css";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { useState } from "react";
import { CChart } from "@coreui/react-chartjs";

function App() {
  // Sample data
   const [minVal, setMinVal] = useState();
   const [maxVal, setMaxVal] = useState();
   const [alert, setAlert] = useState("");
   const setmin = (e) => {
     if (e < maxVal) {
       setMinVal(e);
     }
     setAlert("Plz Enter A Value Less Than Max Value");
   };

  const data = [
    { argument: "Monday", value: {minVal} },
    { argument: "Tuesday", value: {maxVal} },
   
  ];
 


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="">
            <h2 className=" text-primary mt-5">Enter Values</h2>
            {alert && <p className="text-danger fw-500">{alert}</p>}
            <div className="d-flex pt-5 ">
              <div className=" col-8  pb-5">
                <input
                  onChange={(e) => setmin(e)}
                  className="p-2 rounded border-1 bar__colorB"
                  type="number"
                  placeholder="Input Values"
                />

                <input
                  onChange={(e) => setMaxVal(e.target.value)}
                  className="p-2  ms-2 bar__colorB"
                  type="number"
                  placeholder="Max Value"
                />
              </div>

              <div className="col-4 ">
                <h2 className="header text-primary">Selection colors</h2>
                <div className=" d-flex flex-column ">
                  <div className="">
                    <div className=" divBox "></div> FFFFFF <div>100%</div>
                  </div>
                  <div>
                    C2E3FF <div>100%</div>
                  </div>
                  <div>
                    008CFF <div>100%</div>
                  </div>
                  <div>
                    003F73 <div>100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Graphs /> */}
          <section>
            <div className="container">
              <div className="row">
                <h3 className="text-primary ms-4 "> Graphs</h3>
                <div className="col border h-100 w-100">
                  <CChart 
                  
                    type="bar"
                    data={{
                      labels: [
                        "level 1"
                      ],
                      datasets: [
                        {
                          label: "",
                          backgroundColor: "#008CFF",
                          data: [40],
                        },
                      ],
                    }}
                    labels="level-1"
                  />
                </div>
                <div className="col border h-100 w-100">
                  <Paper>
                    <Chart data={data}>
                      <PieSeries valueField="value" argumentField="argument" />
                      <Title text="level-2" />
                    </Chart>
                  </Paper>
                </div>
                <div className="col border h-100 w-100">
                 
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
