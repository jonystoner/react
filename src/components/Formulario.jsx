import React, { Component } from 'react';

class  Formulario extends Component {
  constructor() {
    super();
    this.titulo ="";
    this.note= "";
  }

  handleTitulo(event){
    this.titulo = event.target.value
    console.log(this.titulo)
  }

  handlecu(cu){
    this.note = cu.target.value
    console.log(this.note)
  }

  render(){
  return (
    <>
      <form className="flex flex-col w-full ">
        <input
          className="rounded-sm border-2 border-gray-400 text-green-700 h-7 w-6/12"
          type="text"
          placeholder="titulo"
          onChange={this.handleTitulo.bind(this)}
        />
        <textarea 
          placeholder="Escreva sua nota" 
          className=" flex flex-col h-72 w-6/12 bg-gray-300"
          onChange={this.handlecu.bind(this)}
         />
        <button className=" mt-7 justify-items-end w-52 h-9 bg-gray-400 rounded-xl text-green-700"> Criar Nota </button>
      </form>
    </>
  )}

}

export default Formulario;