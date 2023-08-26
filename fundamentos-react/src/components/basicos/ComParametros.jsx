import React from "react";

export default function ComParametro(props) { 
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.nome} tem nota { props.nota} e está { props.nota >= 10 ? "aprovado" : "recuperação" } </p>
        </div>
    )
}