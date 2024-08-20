import React, { useState, useEffect } from "react";
import { HookToEjercicioReactJs } from "../Hooks/HookToEjercicioReactJs";

export const EjercicioReactJs = () => {
  const { dataForm, resultado, changeHandler, submitHandler } = HookToEjercicioReactJs();
  const [dataUrl, setDataUrl] = useState([]);

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
            <form onSubmit={submitHandler}>
              <div className="row g-3 align-items-center">
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputA" className="form-label">Value of a</label>
                  <input type="number" className="form-control text-align-right" id="inputa" placeholder="Ingrese un valor" defaultValue={1} min={1}/>
                  <span id="error-valueOfA" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputB" className="form-label">Value of b</label>
                  <input type="number" className="form-control text-align-right" id="inputb" placeholder="Ingrese un valor" defaultValue={1} min={1}/>
                  <span id="error-valueOfB" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputC" className="form-label">Value of c</label>
                  <input type="number" className="form-control text-align-right" id="inputc" placeholder="Ingrese un valor" defaultValue={1} min={1}/>
                  <span id="error-valueOfC" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="gap-2 mb-3">
                  <button type="submit" className="btn btn-primary">Guardar </button>
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
