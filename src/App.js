import {ListaDeNotas} from "./components/ListaDeNotas"
import Formulario from "./components/Formulario"


function App() {
  return (
    <section className="flex flex-row w-screen mx-5">
      <div className="flex flex-row h-full w-5/12"> 
        <Formulario/>
      </div>
      <div className="flex flex-row my-16 w-6/12"> 
        <ListaDeNotas />  
      </div>    
    </section>
  );
}

export default App;
