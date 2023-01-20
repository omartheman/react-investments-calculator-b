export default function Input({labelValue, defaultValue, changeEventHandler, displayValue}){
  return (
    <div>
      <label>
        {labelValue}
        <input 
          value={defaultValue}
          onChange={(e) => {
            changeEventHandler(Number(e.target.value))
          }}
        />
      </label>
      <div>{displayValue}</div>
    </div>
  )
}