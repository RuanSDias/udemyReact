import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome='Vediswaldo' idade={20} nerd={true}/>
            <DiretaFilho nome='Cleidiswania' idade={35} nerd={false}/>
        </div>
    )
}