import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";


export const Landing = () => {

    const navigate = useNavigate();

    return <div className="flex justify-center">
        
       <div className="pt-16 max-w-screen-lg">
           
           <div className =" grid grid-cols-1 gap-4 md:grid-cols-2 ">
                 <div className="flex justify-center">
                    <img src={"/chessBoard.png"} className="max-w-96"></img>
                 </div>
                 <div>
                    <h1 className="text-4xl font-bold text-white">
                       Play chess online with friends!
                    </h1>
                    <div className="mt-16">
                       <Button onClick={() => {
                        navigate("/game")
                       }}>
                            Play
                       </Button>
                    </div>
                 </div>
           </div>
       </div>

    </div>
}