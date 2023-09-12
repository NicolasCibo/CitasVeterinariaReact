import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [datosPaciente, setDatosPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados); 
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex lg:ml-20">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          datosPaciente = {datosPaciente}
          setDatosPaciente = {setDatosPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setDatosPaciente = {setDatosPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App