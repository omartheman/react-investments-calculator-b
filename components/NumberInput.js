export default function NumberInput({labelValue, defaultValue, changeEventHandler, displayValue}){
  return (
    <div>
      <label>
        {labelValue}
        <input 
          className="bg-slate-800 text-white p-1"
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