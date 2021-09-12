import React, { Component } from 'react';
import  CardNota from "../components/CardNota"



export  class ListaDeNotas extends Component {
  render() {
     return (
      <>
        <ul className="flex h-40" >
          {Array.of("Trabalho","Trabalho","Estudos").map((categoria,index ) => {              
            return (
             <li className="flex flex-row justify-between w-full" key={index}>
               <span> {categoria} </span>                 
                 <CardNota/>  
             </li>
              );   
           })}
        </ul>    
      </>
     )   
    }
}