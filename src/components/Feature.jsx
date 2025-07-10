import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../style/features.css";

export default function Feature() {
  const data = [
    {
      title: "Revenue",
      amount: "$2,415",
      rate: "-11.4",
      isNegative: true,
    },
    {
      title: "Sales",
      amount: "$2,415",
      rate: "-1.4",
      isNegative: true,
    },
    {
      title: "Cost",
      amount: "$2,415",
      rate: "+2.4",
      isNegative: false,
    },
  ];

  return (
    <div className="features">
      {data.map((item, index) => (
        <div className="featureItem" key={index}>
          <span className="featureTitle">{item.title}</span>
          <div className="featureContainer">
            <span className="featureMoney">{item.amount}</span>
            <span className={`featureRate ${item.isNegative ? "negative" : ""}`}>
              {item.rate}
              {item.isNegative ? (
                <ArrowDownwardIcon className="featureIcon negative" />
              ) : (
                <ArrowUpwardIcon className="featureIcon" />
              )}
            </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>
      ))}
    </div>
  );
}
