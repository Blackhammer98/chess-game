import { ReactNode } from "react"

export const Button = ({onClick, children } : {onClick : () => void , children: ReactNode }) => {
  return <div>
    <button onClick={onClick} className=" bg-green-500 hover:bg-green-700
     text-white font-bold py-2 px-28 rounded text-2xl ">
     {children}
       </button>
  </div>
}