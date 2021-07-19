import { useState } from 'react'

const Card = ({name, click1, children1, click2}) => {
    const [authToRemove, setAuthToRemove] = useState(false)

    const handleRemove = () => {
        setAuthToRemove(true)
    }

    const handleNoRemove = () => {
        setAuthToRemove(false)
    }
    
    return(
        <div>
            
            <div>
                <h3>{name}</h3>
                <button onClick={ click1 }>{ children1 }</button>
                <button onClick={() => handleRemove()}> Remove </button>
            </div>
            
            {
                authToRemove === true
                ?   <div>
                        <h4>Are you sure about removing this task?</h4>
                        <button onClick={ click2 }>Yes</button>
                        <button onClick={() => handleNoRemove()} >No</button>
                    </div>
                : ""
            }

        </div>
    )
}

export default Card