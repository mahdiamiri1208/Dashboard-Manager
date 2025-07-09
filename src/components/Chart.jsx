import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../style/Chart.css"

const data = [
  { name: "Jan", revenue: 12000, users: 50 },
  { name: "Feb", revenue: 14500, users: 410 },
  { name: "Mar", revenue: 17200, users: 880 },
  { name: "Apr", revenue: 16000, users: 1660 },
  { name: "May", revenue: 18500, users: 2720 },
  { name: "Jun", revenue: 21000, users: 3900 },
  { name: "Jul", revenue: 19800, users: 4080 },
  { name: "Aug", revenue: 22000, users: 5240 },
  { name: "Sep", revenue: 24000, users: 6400 },
  { name: "Oct", revenue: 26000, users: 7530 },
  { name: "Nov", revenue: 25000, users: 9710 },
  { name: "Dec", revenue: 35000, users: 15060 },
];

export default function Chart() {
  return (
    <div className="chart w-100">
      <h4 className="chartTitle">Month user & sales</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="users" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
