import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Typography } from "@mui/material";

export default function Feature() {
  const data = [
    {
      title: "Revenue",
      amount: "$2,415",
      rate: "-11.4",
      icon: <ArrowDownwardIcon sx={{ color: "red", fontSize: { xs: 18, sm: 24 } }} />,
      isNegative: true,
    },
    {
      title: "Sales",
      amount: "$2,415",
      rate: "-1.4",
      icon: <ArrowDownwardIcon sx={{ color: "red", fontSize: { xs: 18, sm: 24 } }} />,
      isNegative: true,
    },
    {
      title: "Cost",
      amount: "$2,415",
      rate: "+2.4",
      icon: <ArrowUpwardIcon sx={{ color: "green", fontSize: { xs: 18, sm: 24 } }} />,
      isNegative: false,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            flex: "1 1 250px",
            p: { xs: 2, sm: 3 },
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 0 13px -10px rgba(0,0,0,0.7)",
            minWidth: "250px",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: 16, sm: 20 }, fontWeight: 600 }}>
            {item.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 30 },
                fontWeight: 600,
              }}
            >
              {item.amount}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 2,
                fontSize: { xs: 14, sm: 16 },
                color: item.isNegative ? "red" : "green",
              }}
            >
              {item.rate}
              {item.icon}
            </Box>
          </Box>
          <Typography sx={{ fontSize: { xs: 12, sm: 14 }, color: "gray" }}>
            Compared to last month
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
