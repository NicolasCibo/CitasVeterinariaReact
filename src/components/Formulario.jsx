import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({pacientes, setPacientes, datosPaciente, setDatosPaciente}) {
  const [nomMascota, setNomMascota] = useState("");
  const [nomPropietario, setNomPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  //Cuando se presiona el boton EDITAR de Paciente.jsx agrega al formulario los datos del paciente
  useEffect(() => {
    if(Object.keys(datosPaciente).length > 0){
      setNomMascota(datosPaciente.nomMascota)
      setNomPropietario(datosPaciente.nomPropietario)
      setEmail(datosPaciente.email)
      setAlta(datosPaciente.alta)
      setSintomas(datosPaciente.sintomas)
    }
  }, [datosPaciente])

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);

    return fecha + random;
  }

  //Cuando se presione el boton de AGREGAR del formulario se activa esta funcion
  const handleSumbit = (e) => {
    e.preventDefault()

    //Detecta si los campos del formulario estan vacios
    if([nomMascota, nomPropietario, email, alta, sintomas].includes('')) {
      setError(true);
    }else{
      setError(false);

      const objetoPaciente = {
        nomMascota,
        nomPropietario,
        email,
        alta,
        sintomas
      }

      /*Si se presiona el boton AGREGAR/EDITAR se recorre el array 'pacientes' cambiando el objeto que se modificó y dejando intacto los demás pacientes,
        caso contrario se accede al else agregando un nuevo registro*/
      if(datosPaciente.id){
        objetoPaciente.id = datosPaciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState);
        setPacientes(pacientesActualizados);
        setDatosPaciente({});
      }else{
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
      }   
  
      //vacia los inputs del formulario
      setNomMascota('');
      setNomPropietario('');
      setEmail('');
      setAlta('');
      setSintomas('');
    }    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Mascota</h2>
      <p className="mt-5 text-center text-xl">
        Añade mascotas y {" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-md py-10 px-5 mt-10 m-3" onSubmit={handleSumbit}>
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nomMascota} onChange={(e) => setNomMascota(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nomPropietario} onChange={(e) => setNomPropietario(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" type="email" placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={alta} onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea  id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"
          value={sintomas} onChange={(e) => setSintomas(e.target.value)} /> 
                
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold text-center hover:bg-indigo-700 cursor-pointer transition-all rounded-md" 
        value={datosPaciente.id ? "EDITAR" : "AGREGAR"}/>
      </form>
    </div>
  )
}

export default Formulario