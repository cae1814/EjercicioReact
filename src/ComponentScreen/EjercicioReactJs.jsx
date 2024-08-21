import { useState } from "react";
import { HookToEjercicioReactJs } from "../Hooks/HookToEjercicioReactJs";
import {alerta} from "../js/functions.js";

export const EjercicioReactJs = () => {
  const {proc, x1, x2, com, isOk, changeHandler, submitHandler } = HookToEjercicioReactJs();
  //let ina, inb, inc;
  //const [ina, setIna] = useState('');
  //const [inb, setInb] = useState('');
  //const [inc, setInc] = useState('');
 console.log("quee");
  /*const Limpiar = () => {
    setIna('');
    setInb('');
    setInc('');
  }*/
  
  if (proc){
  if (isOk){
    alerta(com, 'success', "");
  } else {
    alerta(com, 'error', "");
  }
}

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Ejercicio React Js</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5>Ejercicio React Js | fecha: 20/08/2024</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form" style={{ paddingright: "7px" }} >
          <div className="h4 pb-1 mb-1 border-bottom border-danger font-size-12 font-family-app">Valores</div>
            <form onSubmit={submitHandler}>
              <div className="row g-3 align-items-center">
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputA" className="form-label">Valor de <b>a</b></label>
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputa" id="inputa" placeholder="Ingrese un valor" defaultValue={1} tabIndex={1}/>
                  <span id="error-valueOfA" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputB" className="form-label">Valor de <b>b</b></label>
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputb" id="inputb" placeholder="Ingrese un valor" defaultValue={1} tabIndex={2}/>
                  <span id="error-valueOfB" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputC" className="form-label">Valor de <b>c</b></label>
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputc" id="inputc" placeholder="Ingrese un valor" defaultValue={1} tabIndex={3}/>
                  <span id="error-valueOfC" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <button type="submit" className="btn btn-primary btn-md mt-4" tabIndex={4}>Calcular</button>&nbsp;&nbsp;
                </div>
              </div>
              <div className="h4 pb-1 mb-1 border-bottom border-danger font-size-12 font-family-app">Resultado</div>
              <div className="row g-3 align-items-center">
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputx1" className="form-label">Valor para x1</label>
                    <input disabled type="text" className="form-control text-align-right" id="inputx1" value={x1} tabIndex={5}/>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputx2" className="form-label">Valor para x2</label>
                  <input disabled type="text" className="form-control text-align-right" id="inputx2" value={x2} tabIndex={6}/>
                </div>
                <div className="mb-3 col-md-8">
                  <label htmlFor="labelInputx2" className="form-label">Comentario</label>
                  <input disabled type="text" className="form-control text-align-left" id="com" value={com} tabIndex={6}/>
                </div>
              </div>
            </form>
            
          </div>
          <br></br>
        </section>
      </div>
    </>
  );
};
