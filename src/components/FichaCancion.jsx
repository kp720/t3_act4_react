// Ficha con los datos básicos de una canción. Todo llega por props.
function FichaCancion({ cancion, abierta, onAlternar }) {
  return (
    <article className={`ficha ${abierta ? 'ficha--abierta' : ''}`}>
      <img className="ficha_portada" src={cancion.portada} alt={`Portada de ${cancion.album}`} />

      <div className="ficha_cuerpo">
        <h3>{cancion.titulo}</h3>
        <p className="ficha_artista">{cancion.artista}</p>

        <button className="ficha_boton" onClick={onAlternar} aria-expanded={abierta}>
          {abierta ? 'Ocultar datos' : 'Ver datos'}
        </button>

        {abierta && (
          <dl className="ficha_datos">
            <div>
              <dt>Álbum</dt>
              <dd>{cancion.album}</dd>
            </div>
            <div>
              <dt>Año</dt>
              <dd>{cancion.anio}</dd>
            </div>
            <div>
              <dt>Género</dt>
              <dd>{cancion.genero}</dd>
            </div>
            <div>
              <dt>País</dt>
              <dd>{cancion.pais}</dd>
            </div>
          </dl>
        )}
      </div>
    </article>
  )
}

export default FichaCancion
