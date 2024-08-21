import React, { useState, useEffect } from "react";
import { HookToEjercicioReactJs } from "../Hooks/HookToEjercicioReactJs";

export const EjercicioReactJs = () => {
  const {x1, x2, com, isOk, changeHandler, submitHandler } = HookToEjercicioReactJs();

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
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputa" placeholder="Ingrese un valor" defaultValue={1} tabIndex={1}/>
                  <span id="error-valueOfA" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputB" className="form-label">Value of b</label>
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputb" placeholder="Ingrese un valor" defaultValue={1} tabIndex={2}/>
                  <span id="error-valueOfB" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputC" className="form-label">Value of c</label>
                  <input onChange={changeHandler} type="number" className="form-control text-align-right" name="inputc" placeholder="Ingrese un valor" defaultValue={1} tabIndex={3}/>
                  <span id="error-valueOfC" className="error" hidden>Debe de ingresar un numero válido</span>
                </div>
                <div className="gap-2 mb-3">
                  <button type="submit" className="btn btn-primary btn-sm" tabIndex={4}>Calcular</button>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputx1" className="form-label">Value of x1</label>
                    <input disabled type="text" className="form-control text-align-right" id="inputx1" value={x1} tabIndex={5}/>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputx2" className="form-label">Value of x2</label>
                  <input disabled type="text" className="form-control text-align-right" id="inputx2" value={x2} tabIndex={6}/>
                </div>
                <div className="mb-3 col-auto">
                  <label htmlFor="labelInputx2" className="form-label">Commentary</label>
                  <input disabled type="text" className="form-control text-align-right" id="com" value={com} tabIndex={6}/>
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
