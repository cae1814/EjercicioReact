import { EjercicioReactJs } from './ComponentScreen/EjercicioReactJs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EjercicioReactJs/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

