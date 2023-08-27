import React from 'react';

import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import MembroFamilia from './components/basicos/MembroFamilia';
import Familia from './components/basicos/Familia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';

export default _ => /*Aqui o '_' pode ser usado no lugar do parâmetro, assim como os (). Trata-se de uma arrow function */

        <div className="App">

            <h1>Fundamentos React</h1>

            <div className='Cards'>
                <Card titulo='Primeiro' color='#0887c2'>
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo='Arrow' color='#0887c2'>
                    <h1>React 2 (Arrow)</h1>
                </Card>

                <Card titulo='Fragmento' color='#0887c2'>
                    <Fragmento/>
                </Card>

                <Card titulo='Desafio aleatório' color='#0887c2'>
                    <Aleatorio min = {0} max = {10}/>
                </Card>

                <Card titulo='Com Parâmetro' color='#0887c2'>
                <ComParametro 
                titulo="Situação do aluno" 
                    nome="Ruan"
                    nota={7}/> 
                </Card>

                <Card titulo='Componente com filhos' color='#0887c2'>
                    <Familia sobrenome="Santos">
                        <MembroFamilia nome="Ruan"/>
                        <MembroFamilia nome="Elis"/>
                        <MembroFamilia nome="Lorenzo"/>
                    </Familia>

                </Card>

                <Card titulo='Repetição' color='#0887c2'>
                    <ListaAlunos/>
                </Card>

                <Card titulo='Desafio repetição' color='#0887c2'>
                    <TabelaProdutos/>
                </Card>

                <Card titulo='Par ou Impar' color='#0887c2'>
                    <ParOuImpar numero={20}/>
                </Card>

                <Card titulo='Comunicação Direta' color='#0887c2'>
                    <DiretaPai/>
                </Card>

                <Card titulo='Comunicação Direta' color='#0887c2'>
                    <IndiretaPai/>
                </Card>

                <Card titulo='Comunicação Direta' color='#0887c2'>
                    <Input/>
                </Card>

                <Card titulo='Contador' color='#0887c2'>
                    <Contador numeroInicial={10}/>
                </Card>
            </div>

        </div>
