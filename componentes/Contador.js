const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);
    return (
    <div>
    <h2 className={ contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h2>
    <hr />
    <button onClick={aumentar}>Aumentar</button>
    <button onClick={disminuir}>Disminuir</button>
    </div>
    );
}