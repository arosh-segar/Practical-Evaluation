import React, { Component } from 'react';

class Item extends Component {

    displayFilteredItem = () => {
        if(
            (this.props.item.details.type==this.props.type && this.props.size == 'all') ||
            (this.props.item.details.size==this.props.size && this.props.type == 'all') ||
            (this.props.item.details.size==this.props.size && this.props.item.details.type==this.props.type) ||
            (this.props.size == 'all' && this.props.type == 'all')
        ) {
          return  (
              <div className="card col-lg-3">
                <img className="card-img-top" src={`${this.props.item.details.image}`} alt="Card image cap" height={"300"} />
                <p className="bg-dark text-light" style={{position: "absolute", top : "0px", right: "0px"}}>{this.props.item.details.tag}</p>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <p className="card-text text-center">${this.props.item.details.price}</p>
                    <button onClick={() => this.props.addToCart(this.props.item)} className="btn btn-dark" style={{width: "100%"}}>Add to cart</button>
                </div>
            </div>
          );
        }

    }

    render() {


        return (
            <React.Fragment>

                {this.displayFilteredItem()}

            </React.Fragment>
        );
    }
}

export default Item;