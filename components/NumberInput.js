export default function NumberInput({labelValue, defaultValue, changeEventHandler, displayValue, inputStyles, inputName, subheading}){
  return (
    <div className="mt-12">
      <label 
        className="block text-center mb-1 text-xl font-extralight"
        for={inputName}
      >
        {labelValue}
      </label>
      {subheading && 
        <div className=" text-center text-md font-extralight mb-2">
          {subheading}
        </div>
      }
      <input 
        id={inputName}
        className="bg-slate-800 text-white p-2 rounded-md w-fit mx-auto text-center block text-xl font-light"
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