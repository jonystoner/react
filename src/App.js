import {ListaDeNotas} from "./components/ListaDeNotas"
import Formulario from "./components/Formulario"
import CardNota from "./components/CardNota"

function App() {
  return (
    <section>
      <Formulario/>
      <ListaDeNotas />
      <CardNota/>
    </section>
  );
}

export default App;
