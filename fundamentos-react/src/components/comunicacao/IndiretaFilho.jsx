import React from "react";

export default props => {

    const gerarIdade = parseInt(Math.random() * (60) + 40)
    const gerarNerd = Math.random() >= 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('João', gerarIdade, gerarNerd)}>Fornecer informações</button>
        </div>
    )
}