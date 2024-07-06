import React, { useEffect, useState } from 'react'
import appFirebase from '../credenciales'
import { getAuth,signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const auth=getAuth(appFirebase);

const Home = () => {

  const [datos, setDatos] = useState([])

  const [error, setError] = useState(null)

  const [cargando, setCargando] = useState(true)

  const [foto, setFoto] = useState(null)

  let navigate = useNavigate();




  useEffect(() => {

    const laptopsApi = async () =>{

      try{
        const respuestaApi = await fetch('https://665a7d6d003609eda45e0a48.mockapi.io/VEHICULOS')
        if(!respuestaApi.ok){
          setError('ha ocurrido un error de bd')
        }
        const datos = await respuestaApi.json()
        setDatos(datos)

        console.log(datos)
      }
      catch(error)
      {
        setError(error)
        console.log(error)
      }
      finally{
        setCargando(false)
      }
    }

    laptopsApi();


  }, [])



  const pasarFoto = (url) =>{
    setFoto(null)
    setFoto(url)
  }

  

  return (
    <>
    <div className="container p-5 table-responsive" >
    <div>
      
      
    </div>
   
    <table class="table table-striped table-bordered table-hover ">
  <thead class="table-dark">
    <tr >
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Foto</th>
      <th scope="col">Color</th>
      <th scope="col">Lugar</th>

    </tr>
  </thead>
  <tbody>
    {
      datos.map( (vehiculo) => (
        <tr class="table-primary">
          <td></td>
          <td>{vehiculo.name}</td>
          <td>
              <button onClick={() => pasarFoto(vehiculo.foto)} type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
              ver foto
              </button>
          </td>
          <td>{vehiculo.color}</td>
          <td>{vehiculo.lugar}</td>
        </tr>
      ))
    }
  </tbody>
</table>
    </div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Vehiculo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        { foto ? <img src={foto} alt="" class="img-fluid" /> : 'no hay foto'}
      </div>

    </div>
  </div>
</div>


    </>



  )
}

export default Home
