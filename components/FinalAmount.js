export default function FinalAmount({amount, text}){
  return (
    <div className="bg-slate-200 text-black py-1 px-4 my-4 rounded-md w-full m-auto text-xl font-light">
      <div className="text-center">
        {text}
      </div>
      <div className="text-center underline">
        ${Math.floor(amount).toLocaleString()}
      </div>
    </div>
  )
}