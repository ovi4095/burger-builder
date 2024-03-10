import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import '../Controls/Controls.css'


const contorls = [
  {label:'Salad', type: 'salad'},
  {label:'Cheese', type: 'cheese'},
  {label:'Meat', type: 'meat'},
]

const BulidContorl = props => {
  return (
    <div className="CardBody">
      <div className="CardBodyLabel">{props.label}:</div>
      <div>
          <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
          <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
      </div>
    </div>
  )
}


const Controls = props => {
  return (
    <div>
        <Card className='Controls'>
            <CardHeader 
            style={{backgroundColor: "#D70F64",
                    color: "white"}}>
                      <h4>Add Ingredients</h4></CardHeader>
            <CardBody>
                {
                  contorls.map((item) => {
                    return <BulidContorl
                            label ={item.label}
                            type = {item.type}
                            key = {parseInt(Math.random()*1000)}
                            added = {()=> props.ingredientAdded(item.type)}
                            removed = {()=> props.ingredientRemoved(item.type)}
                            />
                  })
                }
            </CardBody>
            <CardFooter
            style={{backgroundColor: "#D70F64",
            color: "white"}}
            ><h5>Price: <strong>{props.price}</strong> Tk</h5></CardFooter>
            <Button className='OrderButton' 
                    color='success' 
                    onClick={props.toggleModal}
                    disabled={props.purchasable}
                    >Order Now</Button>
        </Card>
    </div>
  )
}

export default Controls