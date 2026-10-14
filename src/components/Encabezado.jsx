const base = import.meta.env.BASE_URL

function Encabezado() {
  return (
    <>
      <header className="header">
        <h1>Bienvenido</h1>
      </header>
      <img
        src={`${base}img/focaSaludo.gif`}
        alt="foquita linda"
        width="20%"
        height="20%"
      />
    </>
  )
}

export default Encabezado
