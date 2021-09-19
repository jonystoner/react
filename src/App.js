import React, { Component } from 'react';

import {ListaDeNotas} from "./components/ListaDeNotas"
import Formulario from "./components/Formulario"


class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    };
  }

  criarNotes(title, text, novos){
    const newNote = {title,text,novos}
    const novoArrayNotas = [...this.state.notas,newNote]
    const novoEstado = {
      notas:novoArrayNotas
    }
   this.setState(novoEstado)    
  }

  deleteNotes(index){
    const arrayNotas = [...this.state.notas];
    arrayNotas.splice(index,1);
    this.setState({notes:arrayNotas})
  }
render() {
  return (
    <section className="flex flex-row lg:w-full mx-5">
      <div className="flex flex-row w-5/12"> 
        <Formulario criarNotes={this.criarNotes.bind(this)} />
      </div>
      <div className="flex flex-row my-16 w-6/12"> 
        <ListaDeNotas
         apagarNotas={this.deleteNotes.bind(this)}  
         notes={this.state.notas} />  
      </div>    
    </section>
  );
  }
}

export default App;
