import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Checkout.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { constants } from '../../common/utils';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Header from '../../common/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

const classes = useStyles;

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'left' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Checkout extends Component {

    constructor(props) {
        super(props);
        if (sessionStorage.getItem('access-token') == null) {
            props.history.replace('/');
        }
        this.state = {
            modalIsOpen: false,
            value: 0,
            flatNoRequired: "dispNone",
            flatNo: "",
            statesListRequired: "dispNone",
            statesList: [],
            state_uuid: "",
            localityRequired: "dispNone",
            locality: "",
            cityRequired: "dispNone",
            city: "",
            pincodeRequired: "dispNone",
            pincode: "",
            saveAddress: false,
            paymentMethods: [],
            addressList: [],
            message: "",
            stepIndex: 0,
            finished: false,
            snackOpen: false,
            snackMessage: "",
            couponCode: "",
            couponError: "dispNone",
            percent: 0,
            newTotal: this.props.location.state.total,
            subTotal: 0,
            discount: 0,
            coupon_id: "",
            saveOrder: false,
            address_id: "",
            payment_id: "",
            pinValid: "dispNone",
            pinCheck: false,
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
            style: {}
        }

        this.getExistingAddress();
        this.getPaymentMethods();
        this.getStatesList();
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    statesChangeHandler = event => {
        console.log("state changed");
        this.setState({ state_uuid: event.target.value });
    }

    inputFlatNoChangeHandler = (e) => {
        this.setState({ flatNo: e.target.value });
    }
    inputPincodeChangeHandler = (e) => {
        this.setState({ pincode: e.target.value });
    }
    inputCityChangeHandler = (e) => {
        this.setState({ city: e.target.value });
    }
    inputLocalityChangeHandler = (e) => {
        this.setState({ locality: e.target.value });
    }
    inputCouponCodeChangeHandler = (e) => {
        this.setState({ couponCode: e.target.value });
    }
    addressClickHandler = (addressId) => {
        console.log("inside addressClickHandler")
        let styleNew = {
            border: "outset",
            borderColor: "red",
            boxShadow: "unset"
        }
        let styleIconnew = {
            color: "green"
        }
        this.setState({
            address_id: addressId,
            style: styleNew,
            styleIcon: styleIconnew
        });
        console.log(this.state.address_id)
    }
    paymentMethodChangeHandler = (e) => {
        console.log("inside paymentMethodChangeHandler")
        this.setState({ payment_id: e.target.value });
        console.log(this.state.payment_id)
    };

    handleNext = () => {
        console.log("bEFORE currIndex" + "-- " + this.state.stepIndex);
        if (this.state.address_id !== "" && this.state.address_id !== null) {
            this.state.stepIndex = this.state.stepIndex + 1;
            this.setState({
                finished: this.state.stepIndex >= 1,
            });
        }
        console.log("next currIndex-- " + this.state.stepIndex);
        console.log("Fetch props" + JSON.stringify(this.props));
    };


    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    handleReset = () => {
        const { stepIndex } = this.state;
        console.log("in handlerReset" + stepIndex);
        if (stepIndex > 0) {
            this.setState({ stepIndex: 0 });
        }
        console.log("after handlerReset" + this.state.stepIndex);
    };

    handleClose = () => {

        this.setState({
            snackOpen: false,
            snackMessage: ""
        })
    };

    getPaymentMethods = () => {

        let that = this;
        let url = `${constants.paymentMethodUrl}`;
        console.log("In get" + url);
        return fetch(url, {
            method: 'GET',
        }).then((response) => {

            console.log("In then" + JSON.stringify(response));
            return response.json();
        }).then((jsonResponse) => {
            that.setState({
                paymentMethods: jsonResponse.paymentMethods
            });
            console.log("val" + this.state.paymentMethods);
        }).catch((error) => {
            console.log('error fetching paymentMethods', error);
        });
    }

    getStatesList = () => {
        let that = this;
        let url = `${constants.statesUrl}`;
        console.log("In state get" + url);
        return fetch(url, {
            method: 'GET',
        }).then((response) => {

            console.log("In state then" + JSON.stringify(response));
            return response.json();
        }).then((jsonResponse) => {
            that.setState({
                statesList: jsonResponse.states
            });
            console.log("val" + this.state.statesList);
        }).catch((error) => {
            console.log('error fetching States List', error);
        });
    }

    getExistingAddress = () => {
        let that = this;
        let url = `${constants.addressUrl}`;
        console.log("In Address get" + url + " token" + sessionStorage.getItem("access-token"));
        return fetch(url, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + sessionStorage.getItem("access-token")
            }
        }).then((response) => {
            console.log("In address then" + JSON.stringify(response));
            return response.json();
        }).then((jsonResponse) => {
            console.log("In then2" + jsonResponse.addresses);
            if (jsonResponse.addresses === null) {
                this.setState({ message: "There are no saved addresses! You can save an address using the 'New Address' tab or using your 'Profile' menu option." })
            }
            if (jsonResponse.addresses !== null) {
                this.setState({ message: "" })
            }
            that.setState({
                addressList: jsonResponse.addresses
            });
            console.log("val" + JSON.stringify(this.state.addressList));
        }).catch((error) => {
            console.log('error fetching addressList', error);
        });
    }

    saveAddressClickHandler = () => {
        console.log("inside saveAddressClickHandler");
        this.state.flatNo === "" ? this.setState({ flatNoRequired: "dispBlock" }) : this.setState({ flatNoRequired: "dispNone" });
        this.state.locality === "" ? this.setState({ localityRequired: "dispBlock" }) : this.setState({ localityRequired: "dispNone" });
        this.state.city === "" ? this.setState({ cityRequired: "dispBlock" }) : this.setState({ cityRequired: "dispNone" });
        this.state.state_uuid === "" ? this.setState({ stateListRequired: "dispBlock" }) : this.setState({ stateListRequired: "dispNone" });
        this.state.pincode === "" ? this.setState({ pincodeRequired: "dispBlock" }) : this.setState({ pincodeRequired: "dispNone" });

        console.log("1st check");
        if ((this.state.flatNo === "") || (this.state.locality === "") || (this.state.city === "") || (this.state.state_uuid === "") || (this.state.pincode === "")) { console.log("Exception"); return; }
        console.log("af 1st check");

        var pinValidation = /^\d{6}$/;

        if (pinValidation.test(String(this.state.pincode)) === false) {
            this.setState({
                pinValid: "dispBlock",
                pinCheck: false
            })
        }
        else {
            this.setState({
                pinValid: "dispNone",
                pinCheck: true
            })
        }

        if (this.state.pinCheck === true) {
            let saveAddressData = JSON.stringify({
                "city": this.state.city,
                "flat_building_name": this.state.flatNo,
                "locality": this.state.locality,
                "pincode": this.state.pincode,
                "state_uuid": this.state.state_uuid
            });
            console.log("SaveAddress Data" + saveAddressData);
            let xhrSaveAddress = new XMLHttpRequest();
            let that = this;
            xhrSaveAddress.addEventListener("readystatechange", function () {
                if (this.readyState === 4 && this.status === 201) {
                    that.setState({
                        saveAddress: true,
                        snackOpen: true,
                        snackOpen: true,
                        snackMessage: "Address saved successfully"
                    });
                    console.log("save success");
                    that.getExistingAddress();
                }
                if (this.readyState === 4 && this.status === 400) {
                    that.setState({
                        saveAddressErrordisp: "dispBlock",
                        saveAddressErrormessage: JSON.parse(this.responseText).message,
                        snackOpen: true,
                        snackMessage: "Unable to save address"
                    });
                    console.log("save error" + JSON.parse(this.responseText).message);
                }
                if (this.readyState === 4 && (this.status !== 400 && this.status !== 201)) {
                    that.setState({
                        saveAddressErrordisp: "dispBlock",
                        saveAddressErrormessage: JSON.parse(this.responseText).error,
                        snackOpen: true,
                        snackMessage: "Unable to save address"
                    });
                    console.log("save error" + JSON.parse(this.responseText).error);
                }
            });

            let url = `${constants.saveAddressUrl}`;
            console.log("In SaveAddress post" + url);

            xhrSaveAddress.open("POST", url);
            xhrSaveAddress.setRequestHeader("authorization", "Bearer " + sessionStorage.getItem("access-token"));
            xhrSaveAddress.setRequestHeader("Content-Type", "application/json");
            xhrSaveAddress.setRequestHeader("Cache-Control", "no-cache");

            xhrSaveAddress.send(saveAddressData);
        }
    }

    applyCouponCodeClickHandler = () => {
        let value = this.state.couponCode;
        console.log("in CouponCHange" + value);
        if (value !== null || value !== "") {
            let that = this;
            let url = `${constants.couponUrl}/${value}`;
            console.log("couponUrl" + url);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': 'Bearer ' + sessionStorage.getItem("access-token")
                }
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                console.log("coup resp" + JSON.stringify(jsonResponse));
                if (jsonResponse.coupon_name === null) {
                    this.setState({ message: "No restaurant with the given name." })
                }
                if (jsonResponse.coupon_name !== null) {
                    this.setState({ message: null })
                }
                this.setState({
                    percent: jsonResponse.percent,
                    coupon_id: jsonResponse.id,
                });
                let newsubTotal = this.props.location.state.total;
                let newDiscount = (this.state.newTotal * this.state.percent) / 100;
                let newTotalval = this.state.newTotal - newDiscount;
                this.setState({
                    subTotal: newsubTotal,
                    discount: newDiscount,
                    newTotal: newTotalval
                })
                console.log("subTotal" + this.state.subTotal + "discount" + this.state.discount + "newTotal" + this.state.newTotal);

            }).catch((error) => {
                console.log('error coupon data', error);
            });
        }
    }

    onPlaceOrderClickHandler = () => {
        console.log("inside onPlaceOrderClickHandler");

        console.log("1st check");
        console.log("af 1st check");

        let item_quantities = []
        if (this.props.location.state.items_list_new.length > 0) {
            this.props.location.state.items_list_new.forEach(function (item, index) {
                let itemNew = {}
                itemNew.item_id = item.id;
                itemNew.price = item.price;
                itemNew.quantity = item.count;
                item_quantities.push(itemNew);
            }, this);
        }

        let saveOrderData = JSON.stringify({
            "address_id": this.state.address_id,
            "bill": this.state.newTotal,
            "coupon_id": this.state.coupon_id,
            "discount": this.state.discount,
            "item_quantities": item_quantities,
            "payment_id": this.state.payment_id,
            "restaurant_id": this.props.location.state.restaurant_id
        });
        console.log("saveOrderData" + saveOrderData);
        let xhrSaveOrder = new XMLHttpRequest();
        let that = this;
        xhrSaveOrder.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 201) {
                that.setState({
                    saveOrder: true,
                    snackOpen: true,
                    snackMessage: "Order placed successfully! Your order ID is " + JSON.parse(this.responseText).id
                });
                console.log("saveOrder success");
            }
            if (this.readyState === 4 && this.status === 400) {
                that.setState({
                    saveAddressErrordisp: "dispBlock",
                    saveAddressErrormessage: JSON.parse(this.responseText).message,
                    snackOpen: true,
                    snackMessage: "Unable to place your order! Please try again!"
                });
                console.log("save error" + JSON.parse(this.responseText).message);
            }
            if (this.readyState === 4 && (this.status !== 400 && this.status !== 201)) {
                that.setState({
                    saveAddressErrordisp: "dispBlock",
                    saveAddressErrormessage: JSON.parse(this.responseText).error,
                    snackOpen: true,
                    snackMessage: "Unable to place your order! Please try again!"
                });
                console.log("save error" + JSON.parse(this.responseText).error);
            }
        });

        let url = `${constants.orderUrl}`;
        console.log("In xhrSaveOrder post" + url);

        xhrSaveOrder.open("POST", url);
        xhrSaveOrder.setRequestHeader("authorization", "Bearer " + sessionStorage.getItem("access-token"));
        xhrSaveOrder.setRequestHeader("Content-Type", "application/json");
        xhrSaveOrder.setRequestHeader("Cache-Control", "no-cache");

        xhrSaveOrder.send(saveOrderData);
    }

    renderStepActions(step) {
        const { stepIndex } = this.state;
        const steps = 2;
        return (
            <div style={{ margin: '12px 0' }}>
                <Button
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    className={classes.button}
                >
                    Back
                  </Button>
                <Button
                    disabled={this.state.value === 1}
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                >
                    {this.state.stepIndex === 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        );
    }


    render() {
        const { stepIndex, finished } = this.state;
        const { state_items_list } = this.props.location.state.items_list_new;
        console.log("props state_items_list" + state_items_list);
        console.log("part3 page props" + JSON.stringify(this.props.location.state.items_list_new));
        console.log(JSON.stringify(this.props.location.state.total));
        console.log("const" + { stepIndex });
        const steps = 2;

        return (
            <div>
                <Header
                    screen={"Checkout"}
                    history={this.props.history} />
                <div className="main-div">
                    <div style={{ width: '69%' }}>
                        <Stepper activeStep={this.state.stepIndex} orientation="vertical">
                            <Step>
                                <StepLabel>Delivery</StepLabel>
                                <StepContent>
                                    <Typography>
                                        <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                                            <Tab label="EXISTING ADDRESS" />
                                            <Tab label="NEW ADDRESS" />
                                        </Tabs>
                                        {this.state.message}
                                    </Typography>
                                    {this.state.value === 0 &&
                                        <TabContainer>
                                            <br />
                                            <div className="gridListAddresses">
                                                <GridList cols={2.5} className="gridListNew">
                                                    {this.state.addressList != null && this.state.addressList.map(address => (
                                                        <GridListTile
                                                            style={this.state.style}
                                                            key={address.id}>
                                                            <div>{address.flat_building_name}</div>
                                                            <div>{address.locality}</div>
                                                            <div>{address.city}</div>
                                                            <div>{address.state.state_name}</div>
                                                            <div>{address.pincode}</div>
                                                            <IconButton style={this.state.styleIcon}>
                                                                <CheckCircleIcon className="tickIcon" onClick={() => this.addressClickHandler(address.id)} />
                                                            </IconButton>
                                                        </GridListTile>

                                                    ))}
                                                </GridList>
                                            </div>
                                            {/* <div>{this.state.message}</div> */}
                                        </TabContainer>
                                    }

                                    {this.state.value === 1 &&
                                        <TabContainer>
                                            <br />
                                            <FormControl style={{ marginBottom: '20px' }} required>
                                                <InputLabel htmlFor="Flat / Building No.">Flat / Building No.</InputLabel>
                                                <Input id="flatNo" type="text" flatNo={this.state.flatNo} onChange={this.inputFlatNoChangeHandler} />
                                                <FormHelperText className={this.state.flatNoRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>
                                            </FormControl>
                                            <br />
                                            <FormControl style={{ marginBottom: '20px' }} required>
                                                <InputLabel htmlFor="Locality">Locality</InputLabel>
                                                <Input id="locality" type="text" locality={this.state.locality} onChange={this.inputLocalityChangeHandler} />
                                                <FormHelperText className={this.state.localityRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>
                                            </FormControl>
                                            <br />
                                            <FormControl style={{ marginBottom: '20px' }} required>
                                                <InputLabel htmlFor="City">City</InputLabel>
                                                <Input id="city" type="text" city={this.state.city} onChange={this.inputCityChangeHandler} />
                                                <FormHelperText className={this.state.cityRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>
                                            </FormControl>
                                            <br />
                                            <FormControl style={{ marginBottom: '20px' }} required>
                                                <InputLabel htmlFor="stateList">State</InputLabel>
                                                <Select
                                                    value={this.state.state_uuid}
                                                    onChange={this.statesChangeHandler}
                                                    style={{ width: '200px' }}
                                                >
                                                    {this.state.statesList.map(st => (
                                                        <MenuItem key={"state" + st.id} value={st.id}>
                                                            {st.state_name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                <FormHelperText className={this.state.stateListRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>
                                            </FormControl>

                                            <br />
                                            <FormControl style={{ marginBottom: '20px' }} required>
                                                <InputLabel htmlFor="Pincode">Pincode</InputLabel>
                                                <Input id="pincode" type="text" pincode={this.state.pincode} onChange={this.inputPincodeChangeHandler} />
                                                <FormHelperText className={this.state.pincodeRequired}>
                                                    <span className="red">required</span>
                                                </FormHelperText>

                                                <FormHelperText className={this.state.pinValid}>
                                                    <span className="red">Pincode must contain<br /> only numbers and must<br /> be 6 digits long</span>
                                                </FormHelperText>
                                            </FormControl>
                                            <br />
                                            <br />
                                            <Button variant="contained" color="secondary" onClick={this.saveAddressClickHandler}>SAVE ADDRESS</Button>
                                        </TabContainer>
                                    }
                                    {this.renderStepActions(0)}
                                </StepContent>

                            </Step>
                            <Step>
                                <StepLabel>Payment</StepLabel>
                                <StepContent>
                                    <FormControl>
                                        <FormLabel>Select Mode of Payment</FormLabel>
                                        <RadioGroup aria-label="payment" name="payment1" value={this.state.payment_id} onChange={this.paymentMethodChangeHandler}>
                                            {
                                                this.state.paymentMethods.map(method => (
                                                    <FormControlLabel key={"payment" + method.id} value={method.id} control={<Radio />} label={method.payment_name} />
                                                )
                                                )
                                            }
                                        </RadioGroup>

                                    </FormControl>
                                    {this.renderStepActions(1)}
                                </StepContent>
                            </Step>
                        </Stepper>
                        {finished && (
                            
                                <Paper square elevation={0} className={classes.resetContainer}>
                                    <Typography><b> View the summary & place your order now!</b></Typography>
                                    <Button onClick={this.handleReset} className={classes.button}>
                                        CHANGE
          </Button>
                                </Paper>
                            

                        )
                        }
                    </div>
                    <div style={{ width: '30%', marginLeft: '5px' }}>
                        <Card className="cardStyle">
                            <CardContent>
                                <div style={{ marginBottom: '10px' }}><b>Summary</b></div>
                                <div style={{ marginBottom: '10px' }}>{this.props.location.state.restaurant_name}</div>
                                <div style={{ marginBottom: '20px' }}>
                                    {this.props.location.state.items_list_new.map(it => (
                                        <div className="item-details" key={it.name}>
                                            <span style={{ align: 'left', width: "11%" }}>{it.item_type === "VEG" ? (<FontAwesomeIcon icon={faCircle} style={{ color: "green" }}></FontAwesomeIcon>) : (<FontAwesomeIcon icon={faCircle} style={{ color: "red" }}></FontAwesomeIcon>)}</span>
                                            <span style={{ align: 'left', width: "33%" }}>{it.name}</span>

                                            <span style={{ align: 'left', width: "11%" }}>{it.count}</span>

                                            <span style={{ align: 'left', width: "33%" }}>{it.price}</span>
                                        </div>

                                    ))}
                                </div>
                                <div>
                                    <span>
                                        <FormControl style={{ backgroundColor: 'rgb(241, 231, 211)' }}>
                                            <InputLabel htmlFor="Coupon">Coupon Code</InputLabel>
                                            <Input id="couponCode" type="text" couponCode={this.state.couponCode} onChange={this.inputCouponCodeChangeHandler} />
                                            <FormHelperText className={this.state.couponError}>
                                                <span className="red">required</span>
                                            </FormHelperText>
                                        </FormControl>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button className={classes.button} variant="contained" onClick={() => this.applyCouponCodeClickHandler()}>APPLY</Button>
                                        {this.state.percent > 0 && <div>
                                            <div>Sub Total &#x20b9;&nbsp;{this.state.subTotal}</div>
                                            <div>Discount &#x20b9;&nbsp;{this.state.discount}</div>

                                        </div>
                                        }
                                    </span>
                                </div>
                                <br />
                                <Divider variant="middle" />
                                <div className="item-details">
                                    <Divider variant="middle" />
                                    <span style={{ align: 'left', width: "40%" }}><b>Net Amount</b></span>
                                    <span style={{ align: 'right', width: "40%" }}><b>&#x20b9;&nbsp;
{this.state.newTotal}</b></span>
                                </div>,
                                <div className="item-details">
                                    <Button style={{ width: "100%" }} variant="contained" onClick={() => this.onPlaceOrderClickHandler()} color="primary">PLACE ORDER</Button>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackOpen} message={this.state.snackMessage}
                    action={[<IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={() => this.handleClose()}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}>

                </Snackbar>
            </div>
        );
    };
}

export default Checkout;