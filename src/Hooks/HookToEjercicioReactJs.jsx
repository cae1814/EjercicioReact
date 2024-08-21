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
            return;
        }

        const d = b ** 2 - 4 * a * c;

        if (d > 0) {
            const x1 = (-b + Math.sqrt(d)) / (2 * a);
            const x2 = (-b - Math.sqrt(d)) / (2 * a);
            setX1(x1);
            setX1(x2);
            setCom(`Conjunto solucion en x1 y x2`);
          } else if (d === 0) {
            const x1 = -b / (2 * a);
            setX1(x1);
            setCom(`Conjunto solucion en x1 y x2`);
          } else {
            setX1("?");
            setX1("?");
            setCom(`No hay solucion`);
          }
    }
    
    return {
        dataForm,
        x1,x2,
        changeHandler,
        submitHandler
    }
}
