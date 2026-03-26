import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
} from "recharts";
const ORANGE = "#FF8811";

export default function RatingsChart({ ratings, height = 250 }) {
    return (
        <div className="rounded-xl py-3 w-full z-0">
            <h4 className="text-xl md:text-2xl font-semibold pb-2">Ratings</h4>
            <ResponsiveContainer width="100%" height={height}>
                <BarChart
                    data={ratings}
                    layout="vertical"
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    barCategoryGap="80%"
                >
                    <XAxis
                        type="number"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#6B7280", fontSize: 15 }}
                        tickCount={6}
                        domain={[0, "dataMax + 100"]}
                    />
                    <YAxis
                        type="category"
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#6B7280", fontSize: 15 }}
                        width={48}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} isAnimationActive={true}>
                        {ratings.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={ORANGE} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}