import { faBasketball, faChessBoard, faCube, faPuzzlePiece, faStaffSnake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";


function Game(){
    return(
        <div>
            <div className="games">
                <div className="gaame">
                    <a href="https://progcourse.github.io/games/puzzle.html" target="_blank"><button className="puz"></button></a>
                </div>
                <div className="gaame">
                    <a href="https://progcourse.github.io/games/tetris.html" target="_blank"><button className="tet"></button></a>
                </div>
                <div className="gaame">
                    <a href="https://progcourse.github.io/games/snake.html" target="_blank"><button className="snak"></button></a>
                </div>
                <div className="gaame">
                    <a href="https://yandex.ru/games/app/187766#app-id=187766&catalog-session-uid=catalog-3d0cf52b-aecf-5809-bada-842b85b725e4-1717412960714-bd72&rtx-reqid=1729791677147034145&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22tag%22%7D&redir-data=%7B%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Ftag%252Fbasketbol_56%253Fysclid%253Dlwyv6akyiw517448744%22%2C%22rn%22%3A297316817%7D" target="_blank"><button className="ball"></button></a>
                </div>
                <div className="gaame">
                    <a href="https://www.chess.com/ru" target="_blank"><button className="chess"></button></a>
                </div>
                
            </div>

        </div>
    )
}

                   


export default Game;