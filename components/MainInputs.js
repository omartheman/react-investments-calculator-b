import NumberInput from '@/components/NumberInput'

export default function MainInputs({
  dollarsPerMonth, 
  setDollarsPerMonth, 
  interestRatePercentage, 
  setInterestRatePercentage, 
  lowerAge, 
  setLowerAge, 
  upperAge, 
  setUpperAge, 
  yearsInvested, 
  finalAge, 
  setFinalAge
}){
  return(
    <>
      <NumberInput 
        labelValue={'Monthly investment ($): '}
        defaultValue={dollarsPerMonth}
        changeEventHandler={setDollarsPerMonth}
        inputName={'monthly-investment'}
      />

      <NumberInput
        labelValue={'Average interest rate (%): '}
        subheading={'(The average rate of return of the S&P 500 is ~11.8%)'}
        defaultValue={interestRatePercentage}
        changeEventHandler={setInterestRatePercentage}
        inputName={'interest-rate'}
      />

      <NumberInput
        labelValue={'Age I start investing:'}
        defaultValue={lowerAge}
        changeEventHandler={setLowerAge}
        inputName={'start-age'}
      />

      <NumberInput
        labelValue={'Age I stop investing:'}
        subheading={"(The age you stop putting in your monthly investment)}"}
        defaultValue={upperAge}
        changeEventHandler={setUpperAge}
        inputName={'end-age'}
      />
      <div className="text-center font-extralight mt-6 text-lg">(Total of <span className="underline">{yearsInvested}</span> years of investing.)</div>

      <NumberInput
        labelValue={'Age I start withdrawing: '}
        defaultValue={finalAge}
        changeEventHandler={setFinalAge}
        inputName={'final-age'}
      /> 
    </>
  )
}