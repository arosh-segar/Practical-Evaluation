import React, { Component } from 'react';
import '../styles/shoppingCart.css'
class ShoppingCart extends Component {


    render() {

        const { shoppingCart , total } = this.props;

        return (
            <React.Fragment>



                <div className="container bg-dark text-light p-4 text-center">
                    <div >
                        {shoppingCart.map(item =>
                            <div className="row m-2">
                                <div className="col-sm-4">
                                <img src={`${item.details.image}`} width="100" height="100" />
                                </div>
                                <div className="col-sm-4">
                                <h4>{item.name}</h4>
                                </div>
                                <div className="col-sm-4">
                                <h3 style={{color:"orange"}}>${item.details.price}</h3>
                                </div>
                            </div>

                        )}
                    </div>

                    <p className="text-center">SUB TOTAL : <span className="h3">${total}</span></p>

                </div>


            </React.Fragment>
        );
    }
}

export default ShoppingCart;