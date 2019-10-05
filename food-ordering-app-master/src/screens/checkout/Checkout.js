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
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { StepButton } from '@material-ui/core';
import PropTypes from 'prop-types';
/*import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';*/




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
/*let activeStep = 0;
let setActiveStep = 0;
let steps = 0;*/
//const steps = getSteps();




/*handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
        this.setState({ stepIndex: stepIndex - 1 });
    }
};

const handleNext = () => {
    //setActiveStep(prevActiveStep => prevActiveStep + 1);
    console.log("next");
    setActiveStep = activeStep + 1;
    //this.setState(setActiveStep) = this.state.activeStep + 1;
    //console.log("End next" + this.state.setActiveStep);
};
*/
const handleBack = () => {
    console.log("back");
    //setActiveStep(prevActiveStep => prevActiveStep - 1);
};



const handleReset = () => {
    console.log("Reset");
    //setActiveStep(0);
};
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

/*
function getSteps() {
    return ['Delivery', 'Payment'];
} 


function getStepContent(step) {
    switch (step) {
        case 0:
            return (<div>
                <Tabs className="tabs" >
                    <Tab label="EXISTING ADDRESS" />
                    <Tab label="NEW ADDRESS" />
                </Tabs>
            </div>);
        case 1:

            let that = this;
            let url = `${constants.paymentMethodUrl}`;
            fetch(url, {
                method: 'GET',
            }).then((response) => {
                console.log(response.json());
                return response.json();
            }).then((jsonResponse) => {
                that.setState({
                    paymentMethods: jsonResponse.data
                });
            }).catch((error) => {
                console.log('error user data', error);
            });
            return (
               
                <div>
                    <FormControl>
                        <FormLabel>Select Mode of Payment</FormLabel>
                    
                    <RadioGroup id="paymentMethods" name="customized-radios">
                            <Radio id="cod" name="cash" value="COD" checked={false}> COD </Radio>
                        </RadioGroup>
                    </FormControl>
            </div>);
            
        default:
            return 'Unknown step';
    }
}



//export default function Checkout() {
const VerticalStepper= ()=> {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    /*
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                    <Step >
                        <StepLabel>Delivery</StepLabel>
                        <StepContent>
                        <Typography>
                            <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                            <Tab label="EXISTING ADDRESS" />
                            <Tab label="NEW ADDRESS" />
                            </Tabs>
                        </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
             
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography><b> View the summary & place your order now!</b></Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        CHANGE
          </Button>
                </Paper>
            )}
        </div>
    );
    */

/*
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography><b> View the summary & place your order now!</b></Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        CHANGE
          </Button>
                </Paper>
            )}
        </div>
    );
     

}
*/

class Checkout extends Component {
    
    constructor() {
        super();
        /*temp check*/
        sessionStorage.setItem("authorization", "Bearer eyJraWQiOiJiNTI3ZGZlOC1iZGQ1LTRiMDctOTg2Yy00NTNjOTAwNmE0M2QiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJkYWY5NDBlMi05NjFmLTRmZWItYTMxYy05Zjk4NDVjZjI2ODgiLCJpc3MiOiJodHRwczovL0Zvb2RPcmRlcmluZ0FwcC5pbyIsImV4cCI6MTU3MDIzNCwiaWF0IjoxNTcwMjA2fQ.eDevtNqqBJdwk3ENLkA-oOHnJUiN_DNILzpLrF9ow5OBjtrley_fdOR1SC288Aq08ZzDbJKsN2RZO2Babt9B5w");
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
            message: null,
            stepIndex: 0,
            finished: false,
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        
        this.getExistingAddress();
        this.getPaymentMethods();
        this.getStatesList();
        
    }
    /*
    componentDidMount() {
        this.getPaymentMethods();
        
    }*/
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    statesChangeHandler = event => {
        console.log("state changed");
        this.setState({ state_uuid: event.target.value });
    }

    /*
    handleNext = () => {
        const { currIndex } = this.state.stepIndex;
        if ({ currIndex} < 2) {
            this.setState({ stepIndex: currIndex + 1 });
        }
        console.log("next currIndex" + { currIndex }+"-- "+ this.state.stepIndex);
    };*/

    handleNext = () => {
        //const { stepIndex } = this.state;
        console.log("bEFORE currIndex" + "-- " + this.state.stepIndex);
        this.state.stepIndex = this.state.stepIndex+1;
        this.setState({
            //stepIndex: this.state.stepIndex + 1,
            finished: this.state.stepIndex >= 1,
        });
        console.log("next currIndex-- " + this.state.stepIndex);
    };


    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };
    
    handleReset = () => {
        const { stepIndex } = this.state;
        console.log("in handlerReset"+stepIndex);
        if (stepIndex > 0) {
            this.setState({ stepIndex: 0});
        }
        console.log("after handlerReset" + this.state.stepIndex);
        
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
            //console.log("In then2" + jsonResponse);
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
            //console.log("In then2" + jsonResponse);
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
        console.log("In Address get" + url + " token" + sessionStorage.getItem("authorization"));
        return fetch(url, {
            method: 'GET',
            headers: {
                'authorization': sessionStorage.getItem("authorization")
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
                this.setState({ message: null })
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
        this.state.flatNo === "" ? this.setState({ flatNoRequired: "dispBlock" }) : this.setState({ flatNoRequired: "dispNone" });
        this.state.locality === "" ? this.setState({ localityRequired: "dispBlock" }) : this.setState({ localityRequired: "dispNone" });
        this.state.city === "" ? this.setState({ cityRequired: "dispBlock" }) : this.setState({ cityRequired: "dispNone" });
        this.state.statesList === "" ? this.setState({ stateListRequired: "dispBlock" }) : this.setState({ stateListRequired: "dispNone" });
        this.state.pincode === "" ? this.setState({ pincodeRequired: "dispBlock" }) : this.setState({ pincodeRequired: "dispNone" });

        if ((this.state.flatNo === "") || (this.state.locality === "") || (this.state.city === "") || (this.state.state_uuid === "") || (this.state.pincode === "")) { return; }

        this.props.history.push({
            pathname: '/confirm/' + this.props.match.params.id,
            bookingSummary: this.state
        });

        console.log("In SaveAddress post" + url);
        let saveAddressData = JSON.stringify({
            "city": this.state.city,
            "flat_building_name": this.state.flatNo,
            "locality": this.state.locality,
            "pincode": this.state.pincode,
            "state_uuid": this.state.state_uuid
        });
        let xhrSaveAddress = new XMLHttpRequest();
        let that = this;
        xhrSaveAddress.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //sessionStorage.setItem("uuid", JSON.parse(this.responseText).id);
                //sessionStorage.setItem("access-token", xhrSaveAddress.getResponseHeader("access-token"));
                that.setState({
                    saveAddress: true,
                });

            }
        });

        let url = `${constants.saveAddressUrl}`;
        xhrSaveAddress.open("POST", url);
        //xhrSaveAddress.setRequestHeader("authorization", "Bearer " + window.btoa(this.state.username + ":" + this.state.loginPassword));
        xhrSaveAddress.setRequestHeader("authorization", "Bearer eyJraWQiOiI5YWYzZjAzNC1lODM2LTRmNTMtYjY5YS04NjU3MDEzYmU4YzIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJkYWY5NDBlMi05NjFmLTRmZWItYTMxYy05Zjk4NDVjZjI2ODgiLCJpc3MiOiJodHRwczovL0Zvb2RPcmRlcmluZ0FwcC5pbyIsImV4cCI6MTU3MDAwOSwiaWF0IjoxNTY5OTgwfQ.UC43UmvS2wGbont3C9gdnIWWzXXrDZ0I-j1CxhhTVwTjscX21vSY3bbcKG8DOgiPDmkE_ZZSxXdtN5GDrN9QCA");
        xhrSaveAddress.setRequestHeader("Content-Type", "application/json");
        xhrSaveAddress.setRequestHeader("Cache-Control", "no-cache");
        
        xhrSaveAddress.send(saveAddressData);


        /*return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })then(response => {

            console.log("In state then" + JSON.stringify(response));
            return response.json();
        }).then((jsonResponse) => {
            console.log("In then2" + response);
            
            //console.log("val" + this.state.statesList);
        }).catch((error) => {
            console.log('error saving Address', error);
        });*/
    }

    renderStepActions(step) {
        const { stepIndex } = this.state;
        const steps = 2;   
        return (
            <div style={{ margin: '12px 0' }}>
                {/* <Button
                    label={stepIndex === 1  ? 'FINE' : 'Ne'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <Button
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )} 

               */}
                <Button
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    className={classes.button}
                >
                    Back
                  </Button>
                <Button
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
        //return (<VerticalStepper/>);
        const { stepIndex, finished } = this.state;
        console.log("const" + { stepIndex });
        const steps = 2;
        
        return (
        <div>
            <Stepper active={this.state.stepIndex} orientation="vertical">
                <Step>
                    <StepLabel>Delivery</StepLabel>
                    <StepContent>
                        <Typography>
                            <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                                <Tab label="EXISTING ADDRESS" />
                                <Tab label="NEW ADDRESS" />
                            </Tabs>
                        </Typography>
                        {this.state.value === 0 &&
                            <TabContainer>
                            <GridList cols={3} className="gridListUpcomingMovies">
                                {this.state.addressList != null && this.state.addressList.map(address => (
                                    <GridListTile
                                        className="gridTile"
                                        key={address.id}>
                                        <div>{address.flat_building_name}</div>
                                        <div>{address.locality}</div>
                                        <div>{address.city}</div>
                                        <div>{address.state.state_name}</div>
                                        <div>{address.pincode}</div>
                                            
                                        </GridListTile>
                                    ))}
                            </GridList>
                            <div>{this.state.message}</div>
                            </TabContainer>
                        }

                        {this.state.value === 1 &&
                            <TabContainer>
                                <FormControl required>
                                    <InputLabel htmlFor="Flat / Building No.">Flat / Building No.</InputLabel>
                                    <Input id="flatNo" type="text" flatNo={this.state.flatNo} onChange={this.inputFlatNoChangeHandler} />
                                    <FormHelperText className={this.state.flatNoRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel htmlFor="Locality">Locality</InputLabel>
                                    <Input id="locality" type="text" locality={this.state.locality} onChange={this.inputLocalityChangeHandler} />
                                    <FormHelperText className={this.state.localityRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel htmlFor="City">City</InputLabel>
                                    <Input id="city" type="text" city={this.state.city} onChange={this.inputCityChangeHandler} />
                                    <FormHelperText className={this.state.cityRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br />
                                <FormControl required>
                                    <InputLabel htmlFor="stateList">State</InputLabel>
                                <Select
                                    value={this.state.state_uuid}
                                        onChange={this.statesChangeHandler}
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
                                <FormControl required>
                                    <InputLabel htmlFor="Pincode">Pincode</InputLabel>
                                    <Input id="pincode" type="text" pincode={this.state.pincode} onChange={this.inputPincodeChangeHandler} />
                                    <FormHelperText className={this.state.pincodeRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br />
                                {this.state.saveAddress === true &&
                                    <FormControl>
                                        <span className="successText">
                                            Registration Successful. Please Login!
                                      </span>
                                    </FormControl>
                                }
                                <br />
                                <Button variant="contained" color="primary" onClick={()=>this.saveAddressClickHandler()}>SAVE ADDRESS</Button>
                            </TabContainer>
                        }
                        <div className={classes.actionsContainer}>
                            <div>
                                {/* <Button
                                    disabled={this.state.stepIndex === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    {this.state.stepIndex === steps - 1 ? 'Finish' : 'Next'}
                                </Button> */}

                               
                            </div>
                        </div>{/*
                        <div className={classes.actionsContainer}>
                            <StepButton children="Payment" className={classes.button}>NEXT</StepButton>
                            <StepButton children="Back" className={classes.button}>BACK</StepButton>
                        </div>*/}
                            {this.renderStepActions(0)}
                    </StepContent>

                </Step>
                <Step>
                    <StepLabel>Payment</StepLabel>
                    <StepContent>
                        <FormControl>
                            <FormLabel>Select Mode of Payment</FormLabel>
                            <RadioGroup column>
                                {
                                    this.state.paymentMethods.map(method => (
                                        <FormControlLabel key={"payment" + method.id} value={method.payment_name} control={<Radio name={method.payment_name} value={method.payment_name} />} label={method.payment_name} />
                                    )
                                    )
                                }
                            </RadioGroup>
                            
                        </FormControl>
                            {this.renderStepActions(1)}
                    </StepContent>
                </Step>
            </Stepper>
            { finished  && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography><b> View the summary & place your order now!</b></Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                    CHANGE
          </Button>
                    </Paper>
        
            )
            }
         </div>
        );
    };
}

export default Checkout;