import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import  'bootstrap'
import axios from 'axios';
import ShoppingList from '../components/ShoppingList';
import ShoppingCart from '../components/ShoppingCart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingList: [],
            size:[],
            type: [],
            sizeInput:'all',
            typeInput: 'all',
            shoppingCart:[],
            total: 0
        }
    }

    addToCart = (item) => {
        const shoppingCart = [...this.state.shoppingCart,item];
        const total = this.state.total + item.details.price;
        this.setState({shoppingCart,total});
        console.log(this.state.shoppingCart);
    }

    componentDidMount() {

        axios.get('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
            .then(response => {


                let sizeArray=[];
                let typeArray=[];
                response.data.forEach((item) => {
                    sizeArray.push(item.details.size);
                    typeArray.push(item.details.type);
                });


                const size = Array.from(new Set(sizeArray));
                const type = Array.from(new Set(typeArray));
                console.log(size);
                console.log(type);



                this.setState({
                    shoppingList: response.data,
                    size,
                    type
                });

            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});

    }


    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  row">
                    <p className="navbar-brand col-lg-3">{this.state.shoppingList.length} Product(s) found.</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="form-group col-lg-4">
                            <label htmlFor="exampleFormControlSelect1">Sizes</label>
                            <select className="form-control" value={this.state.sizeInput} name="sizeInput" onChange={this.handleChange}>
                                <option value={'all'} selected>All</option>
                                {this.state.size.map(s =>
                                    <option value={s}>{s}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group col-lg-4">
                            <label htmlFor="exampleFormControlSelect1">Order by</label>
                            <select className="form-control" value={this.state.typeInput} name="typeInput" onChange={this.handleChange}>
                                <option value={'all'} selected>All</option>
                                {this.state.type.map(t =>
                                    <option value={t}>{t}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-shopping-cart display-5" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </nav>

                <div className="collapse" id="collapseExample">
                    <ShoppingCart shoppingCart={this.state.shoppingCart} total={this.state.total} />
                </div>
                <ShoppingList addToCart={this.addToCart} shoppingList = {this.state.shoppingList} size={this.state.sizeInput} type={this.state.typeInput} />




            </React.Fragment>

        );
    }
}

export default Home;