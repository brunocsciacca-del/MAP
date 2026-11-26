import { useState } from 'react'
import { Menu } from './components/menu'
import s from './Contact.module.css'

function Contact(){

const [nome, setNome] = useState("")
const [assunto, setAssunto] = useState("")

const enviar = () => {

}

    return(
        <div className={s.wrapContact}>
            <Menu/>
            <h1>CONTATO</h1>
            <div className={s.formulario}>
                <div className={s.wrapInputs}>
                    <label htmlFor="nome">Nome</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} className={s.inputData} type="text" placeholder='Insira seu nome'/>
                </div>
                 <div className={s.wrapInputs}>
                    <label htmlFor="assunto">Assunto</label>
                    <textarea value={assunto} onChange={(e) => setAssunto(e.target.value)} className={s.textAreaData} placeholder='Insira o assunto'/>
                </div>
                <button onClick={enviar}>ENVIAR</button>
            </div>
        </div>
    )
}

export default Contact