export default function AmountPerYear({
  amountPerYear, 
  interestRatePercentage, 
  yearsInvested, 
  dollarsPerMonth, 
  lowerAge
}){

  return(
    <div className="">
      {/* Display Annual Sums */}
      <h2 className="text-center mt-20 mb-10 text-2xl">
        Amount per year: 
      </h2>
      {
        amountPerYear.map((value, index, array) => {
          const previousYearAmount = Math.floor(array[index - 1])
          const previousYearAmountNumber = array[index - 1];

          const currentYearDisplayAmount = Math.floor(value).toLocaleString()
          const interestAmountOnPreviousYear = Math.floor(interestRatePercentage/100 * previousYearAmountNumber)
          const amountInvestedThisYear = index < yearsInvested ? 
          Math.floor(dollarsPerMonth * 12)
          : 0;

          return(
            <>
              <div className="mb-8 flex flex-col items-center">
                <div>
                  Year {index + 1}, age {Number(lowerAge) + index + 1}:
                </div>

                {/* Total Amount Saved So Far */}
                <div className="underline bg-purple-200 w-fit text-black rounded-md px-4 mb-2">
                  ${currentYearDisplayAmount} total
                </div>

                {/* Breakdown of additions to get to total amount saved */}
                  <div className="flex flex-col items-center mb-6">
                  {index > 0 && 
                    <>
                      <p className={`${index < yearsInvested ?
                          "bg-green-300 text-black"
                          : "bg-blue-200 text-black"
                      } rounded-md px-2 w-fit`}>
                        ${amountInvestedThisYear.toLocaleString()} invested this year
                      </p>
                      <p>
                        + previous year&apos;s amount of ${previousYearAmount.toLocaleString()}
                      </p>
                      <p>
                        + interest on previous year&apos;s amount. That&apos;s {interestRatePercentage}% of ${previousYearAmount.toLocaleString()}, which is ${interestAmountOnPreviousYear.toLocaleString()}
                      </p>
                      <p>
                        {/* Calculate sum of investments up to this point & display to user  */}
                        <span></span>${amountInvestedThisYear.toLocaleString()} + ${previousYearAmount.toLocaleString()} + ${interestAmountOnPreviousYear.toLocaleString()} = ${
                          (
                            amountInvestedThisYear 
                            + previousYearAmount
                            + interestAmountOnPreviousYear
                          )
                          .toLocaleString()
                        }
                      </p>
                    </>
                  }
                  </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}