import Encabezado from './components/Encabezado'
import Parrafo from './components/Parrafo'
import CajaMusica from './components/CajaMusica'
import BibliotecaCanciones from './components/BibliotecaCanciones'

const base = import.meta.env.BASE_URL

const introduccion = [
  'Reproductor de Musica :D',
]

function App() {
  return (
    <>
      <Encabezado />

      <section className="section">
        {introduccion.map((texto) => (
          <Parrafo key={texto}>{texto}</Parrafo>
        ))}

        <Parrafo>Texto Misterioso</Parrafo>

        <section className="section">
          <h2>
            Más texto misterioso
          </h2>
        </section>

      </section>

      <BibliotecaCanciones />

      <CajaMusica />
    </>
  )
}

export default App
