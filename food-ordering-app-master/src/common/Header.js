import React, { Component } from 'react';
import './Header.css';
import { constants } from './utils';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            search: "",
            message: null
        }

    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <span style={{ width: "33%" }}>
                        <FastfoodIcon style={{ color: "white" }}></FastfoodIcon>
                    </span>
                    <span style={{ width: "33%" }}>
                        <SearchIcon style={{ color: "white", verticalAlign: "middle" }}>
                        </SearchIcon>
                        <Input id="search" name = "search"
                        style={{ width: "220px", color: "white" }} type="text" 
                        placeholder="Search by Restaurant Name" onChange={this.searchChangeHandler}>
                        </Input>
                    </span>
                    <span style={{ width: "33%", textAlign: "right" }}>
                        <Button variant="contained" onClick={this.loginClickHandler} color="default">
                            <AccountCircleIcon></AccountCircleIcon>
                            LOGIN
                        </Button>
                    </span>


                </header>
                <div className="card-details">
                    {(this.state.data !== null) && (this.state.data !== undefined) ?
                     (this.state.data.map(restaurant => (
                        
                        <Card key = {restaurant.id} style={{ align: 'left', width: "25%" }}>
                            <CardContent>
                                <div>
                                    <img 
                                    style={{ height: '150px', width: '100%', align: 'left'}}
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
                    )))  : null
                        
                   }
                   <div>{this.state.message}</div>
                </div>
            </div>
        )

    }

    getRestaurantData = (restaurantName) => {
        let that = this;
        let url = `${constants.findRestaurant}/${restaurantName}`;
        console.log(restaurantName)
        console.log(url)
        return fetch(url, {
            method: 'GET',
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.restaurants === null){
                this.setState({message: "No restaurant with the given name."})
            }
            if(jsonResponse.restaurants !== null){
                this.setState({message: null})
            }
            that.setState({
                data: jsonResponse.restaurants
            });
            console.log(this.state.data);
        }).catch((error) => {
            console.log('error restaurant data', error);
        });
    }

    searchChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.getRestaurantData(this.state.search)
      }

}

export default Header;