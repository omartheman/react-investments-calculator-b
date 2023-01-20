export default function NumberInput({labelValue, defaultValue, changeEventHandler, displayValue, inputStyles}){
  return (
    <div className="mt-4">
      <label>
        {labelValue}
        <input 
          className={inputStyles}
          value={defaultValue}
          onChange={(e) => {
            changeEventHandler(Number(e.target.value))
          }}
        />
      </label>
      {displayValue && 
        <div>{displayValue}</div>
      }
    </div>
  )
}