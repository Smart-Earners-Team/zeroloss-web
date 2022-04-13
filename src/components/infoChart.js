import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class InfoChart extends Component {
  render() {
    const options = {
      //   exportEnabled: true,
      theme: "light",
      //   backgroundColor: "dimgray",
      animationEnabled: true,
      textColor: "blue",
      title: {
        text: "Total Supply: 533,000,000",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{desc}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            {
              y: 50,
              label: "ZEROLOSS Ecosystem",
              desc: "50% LP locked up",
              fill: "gold",
            },
            {
              y: 11.72,
              label: "Early Access",
              desc: "11.72% vested and linearly distributed",
            },
            {
              y: 9,
              label: "Development",
              desc: " 9% linearly unlocked over a period of 24months",
            },
            { y: 10.28, label: "Marketing", desc: "10.28% linearly unlocked" },
            {
              y: 8,
              label: "Team",
              desc: "8% vested and linearly unlocked to pay the working team",
            },
            { y: 11, label: "Treasury", desc: "11% vested and locked up" },
          ],
        },
      ],
      info: (
        <div
          style={{ marginTop: -30 }}
          className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d"
        >
          {/* <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"> */}
          {/* <img src="images/unbankedz.png" /> */}
          {/* </span> */}
          {/* <h3 className="h5-font font-w--700 mb-1">Global Adoption</h3> */}
          <p className="font-size--16">
            {" "}
            zDAO will be minted as token to secure the ZEROLOSS DAO
            <br />A fixed amount of ZLT will be voted for and burnt to mint
            zDAO, this will ensure the sustainable interoperability of ZEROLOSS
            with stable coins and BNB. Read our white paper{" "}
            <a href="https://drive.google.com/file/d/1KvACbgj-2-ZrsM8v_UHj7BuV__OjoewV/view">
              here
            </a>
            <br />
            ZEROLOSS is the utility and dApp, ZLT is the currency
            <br />
            For more information about ZEROLOSS send us an email{" "}
            <a href="mailto:info@zeroloss.org">here</a> or chat with our team on
            discord <a href="https://discord.gg/brUDkCb72M">here</a>
          </p>
        </div>
      ),
    };

    return (
      <div>
        <h1
          style={{ textAlign: "center"}}
        //   className="mb-3 h3-font font-b--700"
        >
          ZEROLOSS TOKENOMICS
        </h1>
        <CanvasJSChart
          options={options}
          //   onRef={(ref) => (this.chart = ref)}
        />
        {
          options.info /*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/
        }
      </div>
    );
  }
}

export default InfoChart;
