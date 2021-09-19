import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.note = "";
    this.novos = "";
  }

  _handleTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value
  }

  _handleNovos(event) {
    event.stopPropagation();
    this.novos = event.target.value
  }

  _handleNote(event) {
    event.stopPropagation();
    this.note = event.target.value
  }

  _criarCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNotes(this.titulo, this.note, this.novos);
    console.log(`Uma nova Nota foi criada ` + this.titulo + " " + this.note + this.novos)
  }

  render() {
    return (
      <>
        <form className="flex flex-col w-full "
          onSubmit={this._criarCard.bind(this)}
        >

          <input
            className="rounded-sm border-2 border-gray-400 text-green-700 h-7 w-6/12"
            type="text"
            placeholder="titulo"
            onChange={this._handleTitulo.bind(this)}
          />
          <textarea
            placeholder="Escreva sua nota"
            className=" flex flex-col h-72 w-6/12 bg-gray-300"
            onChange={this._handleNote.bind(this)}
          />
          <input
            className="rounded-sm border-2 border-gray-400 text-green-700 h-7 w-6/12"
            type="text"
            placeholder="novos"
            onChange={this._handleNovos.bind(this)}
          />

          <button className=" mt-7 justify-items-end w-52 h-9 bg-gray-400 rounded-xl text-green-700"> Criar Nota </button>
        </form>
      </>
    )
  }

}

export default Formulario;