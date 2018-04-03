import Listitem from './Listitem';
import React, { Component } from 'react';
import Http from './Service';
import './detail.css';
class detail extends Component {
    constructor() {
        super()
        this.state = {
            product: {}
        };
    }
    componentDidMount() {
        let api = new Http();
        api.getbyId(this.props.match.params.id).then((result) => {
            this.setState({
                product: result.data
            });
        })
    }
    render() {
        console.log(this.props);
        return (

            <div class="columns is-multiline is-mobile">
           
            <div class="column is-half">
            <div class="product-image">
            <img src={this.state.product.image} />
            </div>
            </div>
            <div class="column is-one-quarter">
            <div class="content">
            {this.state.product.name}<br />
            {this.state.product.description}<br />
            <div class="price"> price : {this.state.product.prices}  </div>
            
            </div>
            </div>
           
          </div>
           
          




        );
    }
}

export default detail;
