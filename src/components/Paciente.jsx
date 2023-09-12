function Paciente({paciente, setDatosPaciente, eliminarPaciente}) {
    const {nomMascota, nomPropietario, email, alta, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm("Seguro que desea eliminar esta mascota?");

        if(respuesta){eliminarPaciente(id);}
    }

  return (
    <div className="bg-white shadow-md rounded-md py-10 px-5 mt-10">
        <p className="font-bold mb-3 uppercase">
            Mascota: {" "}
            <span className="font-normal normal-case">{nomMascota}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
            Propietario: {" "}
            <span className="font-normal normal-case">{nomPropietario}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
            Email: {" "}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
            Fecha alta: {" "}
            <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 uppercase">
            Sintomas: {" "}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md uppercase font-bold" 
            onClick={() => setDatosPaciente(paciente)}
            >Editar</button>

            <button type="button" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md uppercase font-bold"
            onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente