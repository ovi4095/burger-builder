import React from 'react'

const Summary = props => {
    const ingredientSummary = props.ingredients.map(item =>{
        const priceCalculetor = item.amount* props.ingredientPrice[item.type]
        return (
            <li key={item.type} 
                style={{display: 'grid',
                gridTemplateColumns: "25% 35% 40%",
                textAlign: 'left',
                fontSize:'18px',
                fontWeight:'600'         
                }} >
                <span style={{textTransform: 'capitalize',
                              fontWeight:'600'         
                }}>{item.type}
                </span  >
                <span style={{textTransform: 'capitalize',
                              fontWeight:'600',
                              marginLeft:'10px'         
                }} >
                    Quantity: {item.amount}
                </span>
                <span style={{textTransform: 'capitalize',
                              fontWeight:'600',
                              marginLeft:'10px'         
                }} >
                    Price: {priceCalculetor}
                </span>
            </li>
        )
    })
    return (
    <div>
        <ul style={{listStyle:'none'}}>
            {ingredientSummary}
        </ul>
    </div>
  )
}

export default Summary