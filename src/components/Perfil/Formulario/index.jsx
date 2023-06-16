import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA , setMateriaA] = useState(0);
    const [materiaB , setMateriaB] = useState(0);
    const [materiaC , setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componete iniciou");

        return () => {
            console.log('O componente finalizou');
        }
    }, []);

    useEffect(() => {
        console.log("O nome estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para:" + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (e) => {
        // console.log(e.target.value)
        // setNome(e.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);

            return e.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3;

        // console.log(media);

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>olá {nome}, Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;