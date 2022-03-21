import React from 'react';




const Groceries = (props) => {
    return (
        <ul>{
            props.groceryList.map( (item, i) => <li key={ i }>{ item }</li> )
        }</ul>
    ); 
}
    
export default Groceries;