function Album({ titulo, portada, sonando, onElegir }) {
  return (
    <button className={`opcion ${sonando ? 'sonando' : ''}`} onClick={onElegir}>
      <div className="album">
        <div className="vinilo"></div>
        <img className="portada" src={portada} alt="" />
      </div>
      <span className="nombre">{titulo}</span>
    </button>
  )
}

export default Album
