import { Color,   PieceSymbol, Square } from "chess.js"
import { useState } from "react";
import { MOVE } from "../pages/Game";





export const ChessBoard = ({ chess, board, socket, setBoard }  : {
    chess : any;
    setBoard : any ;
    board : ({
        square : Square;
        type : PieceSymbol;
        color: Color;
    } | null)[][];
  socket : WebSocket 
}) => {

    const [ from ,setFrom ] = useState<null | Square>(null);
    
    const getPieceUnicode = (type: PieceSymbol, color: Color) => {
        const unicodeMap: Record<PieceSymbol, { w: string; b: string }> = {
            p: { w: "♙", b: "♟" },
            r: { w: "♖", b: "♜" },
            n: { w: "♘", b: "♞" },
            b: { w: "♗", b: "♝" },
            q: { w: "♕", b: "♛" },
            k: { w: "♔", b: "♚" },
        };
        return unicodeMap[type][color];

    }
    return <div className="text-back ">
        
        
           {board.map((row , i) => {
            return <div key ={i} className="flex ">
                {
                    row.map((square , j) => {
                        const squareRepresentation = String.fromCharCode( 97 +(j % 8)) + "" + (8 - i) as Square;
                        

                        return <div onClick={() => {
                             if(!from) {
                                setFrom(squareRepresentation);
                             } else {
                                
                                socket.send(JSON.stringify({
                                    type : MOVE,
                                    payload: {
                                        move : {
                                        from ,
                                        to : squareRepresentation
                                        }
                                        
                                    }
                                }))
                                setFrom(null)
                                chess.move({
                                    from ,
                                    to : squareRepresentation
                                });
                                setBoard(chess.board())
                                console.log({
                                    from , 
                                    to  : squareRepresentation
                                })

                             }
                             
                        }} key={j} className={`w-20 h-20    ${(i+j)%2 === 0 ? 'bg-green-700' : 'bg-yellow-100'}`}>
                            <div className="w-full justify-center flex h-full">
                                <div className="h-full justify-center flex flex-col">
                                {square ? (
                                            <span className="text-5xl">
                                                {getPieceUnicode(square.type, square.color)}
                                            </span>
                                        ) : null}
                                </div>
                                </div>
                           
                            </div>
                    })
                }
                </div>
           
           })
        }
       
    </div>
}