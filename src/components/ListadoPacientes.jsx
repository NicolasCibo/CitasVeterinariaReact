import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setDatosPaciente, eliminarPaciente}) {
  return ( 
    <div className="md:w-1/2 lg:w-2/5 xl:mx-20 lg:mx-10">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Mascotas</h2>
            <p className="mt-5 text-center text-xl">
              Administra tus {" "}
              <span className="text-indigo-600 font-bold">Mascotas</span>
            </p>
    
            <div className="md:h-screen overflow-y-auto">
              {pacientes.map((paciente) =>{ 
                return(
                  <Paciente 
                    key = {paciente.id} 
                    paciente = {paciente} 
                    setDatosPaciente = {setDatosPaciente}
                    eliminarPaciente = {eliminarPaciente}
                  />
              )})}
            </div> 
          </>
          
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay mascotas registradas</h2>
            <p className="mt-5 text-center text-xl">
              Agrega mascotas y te aparecerán {" "}
              <span className="text-indigo-600 font-bold">aquí</span>
            </p>
          </>
        ) }
         
    </div>
  )
}

export default ListadoPacientes