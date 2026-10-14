import { useState } from 'react'
import FichaCancion from './FichaCancion'
import { canciones } from '../data/canciones'

function BibliotecaCanciones() {
  const [abiertaId, setAbiertaId] = useState(null)

  const alternar = (id) => {
    setAbiertaId(abiertaId === id ? null : id)
  }

  return (
    <section className="biblioteca">
      <h2>Sobre las canciones</h2>
      <p className="biblioteca_intro">
        Expande la sección y expande tu conocimiento.
      </p>

      <div className="biblioteca_rejilla">
        {canciones.map((c) => (
          <FichaCancion
            key={c.id}
            cancion={c}
            abierta={abiertaId === c.id}
            onAlternar={() => alternar(c.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default BibliotecaCanciones
