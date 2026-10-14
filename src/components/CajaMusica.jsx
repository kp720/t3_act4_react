import { useState, useRef, useEffect } from 'react'
import Album from './Album'
import { canciones } from '../data/canciones'

const base = import.meta.env.BASE_URL

function CajaMusica() {
  const [abierta, setAbierta] = useState(false)
  const [actual, setActual] = useState(null)
  const [pausado, setPausado] = useState(false)
  const [volumen, setVolumen] = useState(0.5)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current.volume = volumen
  }, [volumen])

  useEffect(() => {
    const cerrarConEsc = (e) => {
      if (e.key === 'Escape') setAbierta(false)
    }
    document.addEventListener('keydown', cerrarConEsc)
    return () => document.removeEventListener('keydown', cerrarConEsc)
  }, [])

  const elegir = (cancion) => {
    setActual(cancion)
    setPausado(false)
    audioRef.current.src = cancion.audio
    audioRef.current.play().catch(() => {})
  }

  const pausarReanudar = () => {
    if (!actual) return
    if (pausado) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
    setPausado(!pausado)
  }

  const parar = () => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setActual(null)
    setPausado(false)
  }

  let estado = 'Elige un álbum'
  if (actual) {
    estado = pausado ? '⏸ En pausa' : `▶ Sonando: ${actual.artista}`
  }

  return (
    <>
      <button
        id="btn-menu"
        className={abierta ? 'activo' : ''}
        aria-label="Abrir música"
        onClick={() => setAbierta(!abierta)}
      >
        <img className="img_normal" src={`${base}img/icono_cerrado.png`} alt="" />
        <img className="img_hover" src={`${base}img/icono_abierto.png`} alt="" />
      </button>

      <div
        id="ventana"
        className={abierta ? 'abierta' : ''}
        role="dialog"
        aria-label="Música de fondo"
        style={{ backgroundImage: `url(${base}img/maderaFondo.jpg)` }}
      >
        <div className="titulo">
          <span>
            <strong>Music for my luv</strong>
          </span>
        </div>

        <div className="contenido">
          <div className="rejilla">
            {canciones.map((c) => (
              <Album
                key={c.id}
                titulo={c.titulo}
                portada={c.portada}
                sonando={actual?.id === c.id}
                onElegir={() => elegir(c)}
              />
            ))}
          </div>

          <div id="estado">{estado}</div>

          <div className="controles">
            <button title="Pausar / Reanudar" onClick={pausarReanudar}>
              ⏯
            </button>
            <button title="Detener" onClick={parar}>
              ⏹
            </button>
            <span>🔈</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volumen}
              onChange={(e) => setVolumen(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop />
    </>
  )
}

export default CajaMusica
