import React, { Component } from 'react';
import { constants } from '../../common/utils';
import StarIcon from '@material-ui/icons/Star';
import './Details.css';

// const detailsStyles = makeStyles(theme => ({
//     root: {
//         width: '90%',
//     }
// }))

class Details extends Component {

    getData = () => {
        let that = this;
        let myUrl = `${constants.restaurantUrl}/246165d2-a238-11e8-9077-720006ceb890`;
        return fetch(myUrl, {
            method: 'GET',
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            that.setState({
                restaurant_picture: jsonResponse.photo_URL,
                restaurant_name: jsonResponse.restaurant_name,
                restaurant_locality: jsonResponse.address.locality,
                restaurant_category: jsonResponse.categories,
                restaurant_customer_rating: jsonResponse.customer_rating,
                restaurant_number_customers_rated: jsonResponse.number_customers_rated,
                restaurant_average_price: jsonResponse.average_price
            });
        }).catch((error) => {
            console.log('error restaurant details data', error);
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            restaurant_picture: null,
            restaurant_name: null,
            restaurant_locality: null,
            restaurant_category: [],
            restaurant_customer_rating: "",
            restaurant_number_customers_rated: null,
            restaurant_average_price: null
        }
        this.getData();
    }

    render() {
        return (
            <div className="details">

                <div className="restaurant-details-section">
                    <div className="left-details">
                        <img style={{ height: '90%', width: '80%', align: 'left', padding: '20px' }}
                            src={this.state.restaurant_picture}
                            alt="restaurant_logo" />
                    </div>
                    <div className="right-details">
                        <div>{this.state.restaurant_name}</div>
                        <div>{this.state.restaurant_locality}</div>
                        <div>
                            {this.state.restaurant_category.map(cat => (
                                <span>{cat.category_name + ", "}</span>
                            ))}
                        </div>
                        <br />
                        <StarIcon></StarIcon>&nbsp;&nbsp;{this.state.restaurant_customer_rating}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x20b9;{this.state.restaurant_number_customers_rated}</span>
                        <div>
                            <span>AVERGAE RATING BY {this.state.restaurant_number_customers_rated} CUSTOMERS</span>
                            
                            <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AVERAGE COST FOR TWO PEOPLE</span>
                        </div>
                    </div>
                </div>

                <div className="items">

                <div className="items-left-details">
                    
                </div>  

                <div className="items-right-details">
                    
                </div>    

                </div>

            </div>
        )
    }
}

export default Details;