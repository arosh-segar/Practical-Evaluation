import React, { Component } from 'react';
import Item from "../components/Item";

class ShoppingList extends Component {


    render() {
        const { shoppingList } = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {shoppingList.map(item =>

                                   <Item item={item} key={item.id} size={this.props.size} type={this.props.type} addToCart={this.props.addToCart} />


                        )}
                    </div>
                </div>



            </React.Fragment>
        );
    }
}

export default ShoppingList;