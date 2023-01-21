import { VictoryLabel, VictoryArea, VictoryAxis, VictoryTheme, VictoryChart, VictoryBar } from 'victory'

export default function BarChart({lowerAge, finalAge, annualData, amountPerYear}){
  
  return(
    <>
      <h2>Label</h2>
      <VictoryChart 
        domainPadding={{x: 15, y: 0}}
        theme={{
          axis: {
            style: {
              tickLabels: {
                fill: 'white',
              }
            }
          },
        }}
      >  
        <VictoryLabel text="Age v. Total Amount Saved"
          x={225} y={40}
          textAnchor="middle"
          style={{
            fill: 'white'
          }}
        />
        <VictoryAxis dependentAxis
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
          label="Age (years)"
          style={{fill: "white"}}
        />
        <VictoryBar 
          style={{
            data: {fill: '#b1b1b1'}
          }}
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
    </>
  )
}