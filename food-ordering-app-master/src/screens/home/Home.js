import React, { Component } from 'react';
import './Home.css';
import { constants } from '../../common/utils';
import Header from '../../common/header/Header';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import { FaCircle } from 'react-icons/fa';

class Home extends Component {
    constructor(props) {
        super(props);
        if (sessionStorage.getItem('access-token') == null) {
            props.history.replace('/');
        }

        this.state = {
            allrestaurantsData: [],
            message: null
        }

        this.getAllRestaurantData();
    }

    render() {
        const { classes, message } = this.props;
        return (
            <div>
                <Header
                    searchHandler={this.getAllRestaurantData}
                    screen={"Home"}
                    history={this.props.history} />
                <div className="card-details">
                    {(this.state.allrestaurantsData !== null) && (this.state.allrestaurantsData !== undefined) ?
                        (this.state.allrestaurantsData.map(restaurant => (

                            <Card key={restaurant.id} style={{ align: 'left', width: "25%", cursor: "pointer" }} onClick={() => this.restaurantClickHandler(restaurant.id)}>
                                <CardContent>
                                    <div>
                                        <img
                                            style={{ height: '150px', width: '100%', align: 'left' }}
                                            src={restaurant.photo_URL} alt="restaurant_picture"></img>
                                        <div style={{ fontSize: "18px" }}>{restaurant.restaurant_name}</div>
                                        <div>{restaurant.categories}</div>
                                        <div className="card-details">
                                            <span style={{ width: "45%", height: "40px", backgroundColor: "yellow", align: 'left' }}>
                                                <StarIcon></StarIcon>&nbsp;&nbsp;{restaurant.customer_rating}&nbsp;&nbsp;({restaurant.number_customers_rated})
                                        </span>
                                            <span style={{ width: "45%", align: 'right' }}>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x20b9; {restaurant.average_price} for two
                                        </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))) : null

                    }
                </div>
                <div>{this.state.message}</div>
            </div>
        )
    }

    getAllRestaurantData = (value) => {
        if (value == null || value === "") {
            let that = this;
            let url = `${constants.allrestaurantsUrl}`;
            return fetch(url, {
                method: 'GET',
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if (jsonResponse.restaurants === null) {
                    this.setState({ message: "No restaurant found" })
                }
                if (jsonResponse.restaurants !== null) {
                    this.setState({ message: null })
                }
                that.setState({
                    allrestaurantsData: jsonResponse.restaurants,
                    message: null
                });
            }).catch((error) => {
                console.log('error restaurant data', error);
            });
        }
        else {
            let that = this;
            let url = `${constants.findRestaurant}/${value}`;
            console.log(value)
            console.log(url)
            return fetch(url, {
                method: 'GET',
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if (jsonResponse.restaurants === null) {
                    this.setState({ message: "No restaurant with the given name." })
                }
                if (jsonResponse.restaurants !== null) {
                    this.setState({ message: null })
                }
                that.setState({
                    allrestaurantsData: jsonResponse.restaurants
                });

            }).catch((error) => {
                console.log('error restaurant data', error);
            });
        }
    }

    restaurantClickHandler = (restuaurantId) => {
        this.props.history.push('/restaurant/' + restuaurantId);
    }

    // logout = () => {
    //     sessionStorage.clear();
    //     this.props.history.replace('/');
    // }

    // navigateToProfile = () => {
    //     this.props.history.push('/profile');
    // }

}



export default Home;