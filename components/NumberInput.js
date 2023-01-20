export default function NumberInput({labelValue, defaultValue, changeEventHandler, displayValue, inputStyles, inputName}){
  return (
    <div className="mt-4">
      <label 
        className="block text-center mb-1"
        for={inputName}
      >
        {labelValue}
      </label>
      <input 
        id={inputName}
        className={`${inputStyles}
          w-fit mx-auto text-center block
        `}
        value={defaultValue}
        onChange={(e) => {
          changeEventHandler(e.target.value)
        }}
      />
      {displayValue && 
        <div>{displayValue}</div>
      }
    </div>
  )
}