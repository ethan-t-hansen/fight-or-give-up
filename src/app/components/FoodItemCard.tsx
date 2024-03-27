


const FoodItemCard = (props: any) => {

    const item = props.item

    return (
        <div className = 'ficard'>
            <h3> {item.description} </h3>
            <p className='italics'> {item.additionalDescriptions} </p>
            <p> <b> Item ID: </b> {item.fdcId} </p>
            <p> <b> Category: </b> {item.foodCategory} </p>
        </div>  
    )

}

export default FoodItemCard