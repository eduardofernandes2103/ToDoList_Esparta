import { useEffect, useState } from 'react'
import { Container } from './styles'

const Card = ({name, click1, children1, click2}) => {
    const [authToRemove, setAuthToRemove] = useState(false)

    const handleRemove = () => {
        setAuthToRemove(true)
    }

    const handleNoRemove = () => {
        setAuthToRemove(false)
    }

    useEffect(() => {
        setAuthToRemove(false)
    }, [click2])
    
    return(
        <Container>
            
            <div className="cardPlace">
                <h3>{name}</h3>
                <button onClick={ click1 }>{ children1 }</button>
                <div className="removeButton">
                    <button onClick={() => handleRemove()}> Remove </button>
                </div>
            </div>
            
            {
                authToRemove === true
                ?   <div className="confirmRemove">
                        <h4>Are you sure about removing this task?</h4>
                        <button onClick={ click2 }>Yes</button>
                        <button onClick={() => handleNoRemove()} >No</button>
                    </div>
                : ""
            }

        </Container>
    )
}

export default Card