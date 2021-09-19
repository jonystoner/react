import React, { Component } from 'react';

class CardNota extends Component {
    render() {
    return (
     <>
       <section className="flex flex-col border-2 mt-2 ml-2 w-36 h-20 bg-green-500 justify-items-start">
          <header>
              <h3>{this.props.title}</h3>
          </header>          
            <p> {this.props.text}</p> 
            <p>{this.props.novos}</p>   
        </section>
     </>
    )
  }
}

export default CardNota;