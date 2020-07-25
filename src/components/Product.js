import React, { Component } from 'react';
import './style.css';
import { withRouter, Link } from 'react-router-dom';
import Header from '../components/Header';
import NumberFormat from 'react-number-format';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/products")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            products: data
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div class="bd2">
                    <div class="row">
                        {this.state.products.map(item =>

                            <div class=" col-sm-3" id="product">
                                <div class="product_block">
                                    <div class="product_image">
                                        <img src={"http://127.0.0.1:8000" + item.image} alt="avata" />
                                    </div>
                                    <div class="product_content">
                                        <label >{item.name}</label>
                                    </div>
                                    <div class="product_price">
                                        <p ><span id="oldPrice"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'đ'} renderText={value => <div>{value}</div>} /></span><span id="price"><NumberFormat value={item.oldPrice} displayType={'text'} thousandSeparator={true} prefix={'đ'} renderText={value => <div>{value}</div>} /></span></p>
                                    </div>
                                    <div class="product_add-t-cart">
                                        <span class="button"><button>Đặt hàng</button><button ><Link to={'/details/'+item.id}>Chi tiết</Link></button></span>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>

        );
    }
}
export default withRouter(Product);