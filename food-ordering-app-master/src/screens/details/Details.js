import React, { Component } from 'react';
import { constants } from '../../common/utils';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import './Details.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Badge from '@material-ui/core/Badge';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(0, 2),
    },
}));

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
            restaurant_average_price: null,
            item_count: 0,
            state_items_list: [],
            found: false
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

                <div className="item-details">

                    <div className="items-left-details">
                        {this.state.restaurant_category != null && this.state.restaurant_category.map(cat => (
                            <div>
                                <div style={{ textTransform: "uppercase" }}><b>{cat.category_name}</b></div>
                                <hr />
                                {cat.item_list.map(item => (
                                    <div className="item-details">

                                        {item.item_type === "NON_VEG" && <span id="non_veg" style={{ float: "left", width: "25%" }}>
                                            <FiberManualRecordIcon style={{ color: "red" }}></FiberManualRecordIcon>
                                        </span>}

                                        {item.item_type === "VEG" && <span id="veg" style={{ float: "left", width: "25%" }}>
                                            <FiberManualRecordIcon style={{ color: "green" }}></FiberManualRecordIcon>
                                        </span>}

                                        <span style={{ float: "left", width: "25%" }}>
                                            {item.item_name}
                                        </span>

                                        <span style={{ float: "left", width: "25%" }}>
                                            {item.price}
                                        </span>

                                        <span style={{ float: "left", width: "25%" }}>
                                            <AddIcon style={{ cursor: "pointer" }} onClick={() => this.onAddClicked(item)}></AddIcon>
                                        </span>
                                    </div>
                                ))}<br /><br />
                            </div>
                        ))}
                    </div>

                    <div className="items-right-details">
                        <Card className="cardStyle">
                            <CardContent>
                                <Badge badgeContent={this.state.item_count} color="primary">
                                    <ShoppingCartIcon></ShoppingCartIcon>
                                </Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>My Cart</b>
                                <div>
                                    {this.state.state_items_list.map(it => (
                                        <div className="item-details">
                                            <span style={{ align: 'left', width: "33%" }}>{it.name}</span>
                                            <span style={{ align: 'left', width: "11%" }}>
                                                <RemoveIcon style={{ cursor: "pointer" }} onClick={() => this.onItemRemoveClicked(it)}></RemoveIcon>
                                            </span>
                                            <span style={{ align: 'left', width: "11%" }}>{it.count}</span>
                                            <span style={{ align: 'left', width: "11%" }}>
                                                <AddIcon style={{ cursor: "pointer" }} onClick={() => this.onItemAddClicked(it)}></AddIcon>
                                            </span>
                                            <span style={{ align: 'left', width: "33%" }}>{it.price}</span>
                                        </div>
                                    ))}
                                </div>

                            </CardContent>
                        </Card>
                    </div>

                </div>

            </div>
        )
    }

    onAddClicked = (newItem) => {
        console.log(newItem.item_name)
        let newItemList = [];
        let found = false
        console.log(newItemList)
        console.log(this.state.state_items_list.length)
        newItemList = this.state.state_items_list
        if ((newItemList.length > 0 && this.state.found === true)) {
            console.log("inside if")
            for (let item of newItemList) {
                if (item.name === newItem.item_name) {
                    console.log("inside 2nd if")
                    item.count = item.count + 1
                    item.price = item.price + newItem.price
                    this.setState({ found: true })
                    let itemNode = item
                    newItemList.pop(item)
                    newItemList.push(itemNode)
                    this.state.item_count = this.state.item_count + 1
                    console.log(itemNode)
                    console.log(newItemList)
                    return
                }
            }
            this.setState({ found: false })
        }
        this.setState({ found: true })
        console.log("inside 1st else")
        let itemNode = {};
        itemNode.name = newItem.item_name
        itemNode.count = 1
        itemNode.price = newItem.price
        this.state.item_count = this.state.item_count + 1
        newItemList.push(itemNode)

        this.setState({ state_items_list: newItemList });
        console.log(this.state.state_items_list);
    }

    onItemAddClicked = (newItem) => {
        let newItemList = this.state.state_items_list
        let itemIndex = 0;
        newItemList.forEach(function (subscriber, index) {
            if (subscriber.name === newItem.name) {
                itemIndex = index;
            }
        }, this);
        let newItems = newItemList;
        //newItems.splice(itemIndex, 1);
        newItem.price = newItem.price + (newItem.price / newItem.count)
        newItem.count = newItem.count + 1
        newItems.splice(itemIndex, 1, newItem);
        this.state.item_count = this.state.item_count + 1
        this.setState({ state_items_list: newItemList });
    }

    onItemRemoveClicked = (newItem) => {
        let newItemList = this.state.state_items_list
        let itemIndex = 0;
        newItemList.forEach(function (subscriber, index) {
            if (subscriber.name === newItem.name) {
                itemIndex = index;
            }
        }, this);
        let newItems = newItemList;
        newItem.price = newItem.price - (newItem.price / newItem.count)
        newItem.count = newItem.count - 1
        if(newItem.count !==0){
            newItems.splice(itemIndex, 1, newItem);
        }
        else{
            newItems.splice(itemIndex, 1);
        }
        this.state.item_count = this.state.item_count - 1
        this.setState({ state_items_list: newItemList });
    }


}

export default Details;