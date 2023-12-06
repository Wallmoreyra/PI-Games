import React, {useState} from 'react'
import { postGames } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';

const Create = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name:"",
    descrip:"",
    platform:[],
    img:"",
    launchDate:"",
    rating:0,
    genres:[]
  })

  const [errors, setErrors] = useState({
    name:"Requerido!!",
    descrip:"",
    platform:"",
    img:"",
    launchDate:"",
    rating:"",
    genres:""
  })

  const generos = [
    "Lista de Generos","RPG", "Indie", "Racing", "Cards"
  ];

  const validate = (state, name) => {
    if(name === "name"){
      //validaciones para el input "nombre"
      if(state.name === "") setErrors({...errors, name: "El nombre es requerido."})
      else if(state.name.length >= 30) setErrors({...errors, name:"El nombre es demaciado largo"})
      else if(state.name.length <= 3) setErrors({...errors, name:"El nombre es demaciado corto"})
      else setErrors({...errors, name: ""})
    }
    if(name === "descrip"){
      //validaciones para el input "descrip"
      if(state.descrip === "") setErrors({...errors, descrip: "La descripción es requerida."})
      else setErrors({...errors, descrip: ""})
    }
    if(name === "platform"){
      //validaciones para el input "platform"
      console.log("hola!!")
      // if(state.platform === "") setErrors({...errors, platform: "La informacion es requerida."})
      // else if(state.platform.length === 0) setErrors({...errors, platform: "La informacion es necesaria."})
      // else setErrors({...errors, platform: ""})

    }
    if(name === "img"){
      //validaciones para el input "noimg"
    }
    if(name === "launchDate"){
      //validaciones para el input "nolaunchDate"
    }
    if(name === "rating"){
      //validaciones para el input "norating"
      if(state.rating === "") setErrors({...errors, rating: "El nombre es requerido."})
      else if(isNaN(parseInt(state.rating))) setErrors({...errors, rating: "El dato debe ser un numero"})
      else if(parseInt(state.rating) < 1 || parseInt(state.rating) > 5) setErrors({...errors, rating: "El valor deve estar entre 1 y 5"})
      else setErrors({...errors, rating: ""})

    }
    if(name === "genres"){
      console.log(state.platform)
      //validaciones para el input "genres"
    }

  }

  const handleChange = (event) => {
    //event.preventDefault()
    //console.log(event.target.value)
    //console.log(event.target.name)

    if(event.target.name === "genres" || event.target.name === "platform"){
      if(state.genres.includes(event.target.value)) return;
      
      if(event.target.name === "platform"){
        let value = document.getElementById(event.target.name).value
        if(state.platform.includes(value) || value === "") return;
        setState({
          ...state,
          [event.target.name]: [...state[event.target.name], value]
        })
      } else {
        setState({
          ...state,
          [event.target.name]: [...state[event.target.name], event.target.value]
        })

      }

      return
    }

    setState({
      ...state,
      [event.target.name]: event.target.value
    })

    // RE-RENDERIZADO
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const buttonDisables = () => {
    let disabledAux = true;
    for( let error in errors){
      if(errors[error] === "") disabledAux = false;
      else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }

  const remove = (event) => {
    const value = document.getElementById(event.target.name).value

    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x!==event.target.id)]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postGames(state))
  }

  return (
    <div>
      {console.log(errors)}
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type='text' name='name' placeholder='Nombre'/>
          <span>{errors.name}</span>
        </div>
        <div>
          <input onChange={handleChange} type="text" name='descrip' placeholder='Descripción'/>
          <span>{errors.descrip}</span>
        </div>
        <div>
          <label>Plataformas: </label>
          <input type="text" name='platform' id='platform' />
          <button onClick={handleChange} name='platform' type='button'>Agregar</button>
          <span>{errors.platform}</span>
          {
            state.platform.map(p => <div key={p}><span id={"platform"}>{p}</span><button name='platform' onClick={remove} type='button' id={p}>x</button></div>)
          }
        </div>
        <div>
          <input onChange={handleChange} type="text" name='img' placeholder='Imagen'/>
          <span>{errors.img}</span>
        </div>
        <div>
          <input onChange={handleChange} type="text" name='launchDate' placeholder='Fecha de Salida'/>
          <span>{errors.launchDate}</span>
        </div>
        <div>
          <input onChange={handleChange} type="text" name='rating' placeholder='Clasificación'/>
          <span>{errors.rating}</span>
        </div>
        <div>
          <label>Generos: </label>
          <select onChange={handleChange} name='genres' id=''>
            {
              generos.map(p => <option key={p} value={p}>{p}</option>)
            }
          </select>
          <span>{errors.genres}</span>
          {
            state.genres.map(p => <div key={p}><span id={"genres"}>{p}</span><button name='genres' onClick={remove} type='button' id={p}>x</button></div>)
          }
          {/* <select name="genre" id="genre" value={selectedGenre} onChange={handleGenreChange}>
            <option value="Selecciona el Genero" disabled>Selecciona el Genero</option>
            {
              generos.map((p) => (<option key={p} value={p}>{p}</option>))
            }
          </select> */}
        </div>
        <input disabled={buttonDisables()} type="submit" />
      </form>
    </div>
  )
}

// { 
// 	"name":"string",
// 	"descrip": "string",
// 	"platform": "PC, PXS, PSX2",
// 	"img": "xxx",
// 	"launchDate":"1988-10-01", //AÑO-MES-DIA //
// 	"rating":"3", // string que paso a numero tiene que ser entre 0 a 5 y puede tener comas//
// 	"genres": "Card, algo, nada, Racing" //string dividido con ", " no importa min y may//
// }

export default Create