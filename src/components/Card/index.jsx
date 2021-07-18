const Card = ({name, click1, children1, click2}) => {
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={ click1 }>{ children1 }</button>
            <button onClick={ click2 }> Remover </button>
        </div>
    )
}

export default Card