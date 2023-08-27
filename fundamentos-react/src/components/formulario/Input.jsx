import React, { useState } from "react";
import '../layout/Input.css';

const Input = (props) => {

      const [valor, setValor] = useState('Inicial')

      function quandoMudar (e) {
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
}

export default Input