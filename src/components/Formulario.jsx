

function Formulario() {
    return (
     <>
       <form>
         <input
           className="rounded-sm border-2 border-red-700"
            type="text"
            placeholder="titulo"
           />
          <textarea placeholder="Escreva sua nota" />
          <button> Criar Nota </button>
        </form>
        </>
    )

}

export default Formulario;