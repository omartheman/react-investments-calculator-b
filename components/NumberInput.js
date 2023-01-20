export default function NumberInput({labelValue, defaultValue, changeEventHandler, displayValue, inputStyles}){
  return (
    <div className="mt-4">
      <label className="block text-center mb-1">
        {labelValue}
      </label>
      <input 
        className={`${inputStyles}
          w-fit mx-auto text-center block
        `}
        value={defaultValue}
        onChange={(e) => {
          changeEventHandler(Number(e.target.value))
        }}
      />
      {displayValue && 
        <div>{displayValue}</div>
      }
    </div>
  )
}