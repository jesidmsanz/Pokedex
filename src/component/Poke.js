import React from 'react'

class Pokedex extends React.Component{
    constructor(){
        super();
        this.state = {
            form:{},
            imagen: ''
        }
    }   
    Api = async () =>{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        let data = await res.json()
        this.setState({
            form: data            
        })
    }
    handlechange = e =>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleSubmit = (e) =>{
        this.Api(); 
        setTimeout(()=>{
            var datos = this.state.form;

                this.setState({
                    imagen:  datos.sprites.front_default
                })
            },200)
               
        e.preventDefault()
    }

    render(){
        return(
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body">
                   <h1>Busca Tu Pokemon</h1>
                   <form onSubmit = {this.handleSubmit}>
                       <label>Nombre Del Pokemon</label>
                       <br/><br/>                       
                       <input type="text" name = "name" onChange = {this.handlechange}/>
                       <br/><br/>
                       
                       <img src={this.state.imagen} alt=""/>
                       <br/><br/>
                       <button type ="submit" className = "btn btn-primary">Mostrar</button>                       
                   </form>
                </div>
            </div>
        )
    }
}
export default Pokedex;










