import { VictoryLabel, VictoryArea, VictoryAxis, VictoryTheme, VictoryChart, VictoryBar } from 'victory'

export default function BarChart({lowerAge, finalAge, annualData, amountPerYear}){
  return(
    <VictoryChart domainPadding={15}>
      <VictoryAxis 
        dependentAxis={true} 
        style={{ 
          grid: {
            stroke: "grey",
          }
        }}
        tickFormat={(t) => `${t / 1000}k`}
      />
      <VictoryAxis crossAxis
        domain={[lowerAge, finalAge]}
        theme={VictoryTheme.material}
        standalone={false}
      />
      <VictoryBar 
        style={{data: {fill: '#b1b1b1'}}}
        data={annualData}
      /> 
      {
        amountPerYear.map((data, index) => {
          return(
            <VictoryAxis 
              dependentAxis={true} 
              key={index}
              label={`$${Math.floor(data).toLocaleString()}`}
              style={{ 
                tickLabels: { fill: "none" }
              }}
              axisValue={data}
            />
          )
        })
      }
    </VictoryChart>
  )
}