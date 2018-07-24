import React from 'react';

const ShoppingList = (props) =>{
  console.log(props);
return (
 <form onSubmit={()=>this.props.addItem()}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.props.values}
            onChange={()=>this.props.handleChange()}
          />
          <button disabled={()=>this.props.inputIsEmpty()}>Add</button>
        </form>
)
}

export default ShoppingList