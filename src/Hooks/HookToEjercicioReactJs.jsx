import React, { useState } from 'react'

export const HookToEjercicioReactJs = () => {

    const [dataForm, setDataForm] = useState(
        {
            inputa: "",
            inputb: "",
            inputc: ""
        }
    );

    const [x1, setX1] = useState("");
    const [x2, setX2] = useState("");
    const [com, setCom] = useState("");
    const [isOk, setIsOk] = useState("");

    const changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const a = parseFloat(dataForm.inputa);
        const b = parseFloat(dataForm.inputb);
        const c = parseFloat(dataForm.inputc);

        if (a === 0){
            //No puede ser 0
            console.info("Esto es cero!!!")
            setCom(`Es cero`);
            return;
        }

        const d = b ** 2 - 4 * a * c;

        if (d > 0) {
            console.info("d > 0")
            const x1 = (-b + Math.sqrt(d)) / (2 * a);
            const x2 = (-b - Math.sqrt(d)) / (2 * a);
            setX1(x1.toFixed(4));
            setX2(x2.toFixed(4));
            setIsOk(true);
            setCom(`Solución en x1 y x2`);
          } else if (d === 0) {
            console.info("d === 0")
            const x1 = -b / (2 * a);
            setX1(x1.toFixed(4));
            setX2("N/A");
            setCom(`Solución en x1 y x2`);
            setIsOk(true);
          } else {
            console.info("else")
            setX1("?");
            setX2("?");
            setCom(`No hay solucion`);
            setIsOk(false);
          }
    }
    
    return {
        dataForm,
        x1,x2,com,isOk,
        changeHandler,
        submitHandler
    }
}
