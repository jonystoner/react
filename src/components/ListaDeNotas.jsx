import React, { Component } from 'react';
import  CardNota from "../components/CardNota"

export  class ListaDeNotas extends Component {
  render() {
     return (
      <>
        <ul className="flex h-40 md:w-5/6" >
          {this.props.notes.map((notes,index ) => {              
            return (
             <li className="flex flex-row justify-between w-full" key={index}>                             
                 <CardNota title={notes.title} text={notes.text} novos={notes.novos} />  
             </li>
              );   
           })}
        </ul>    
      </>
     )   
    }
}