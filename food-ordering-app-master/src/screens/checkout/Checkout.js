import React, { Component} from 'react';
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
import { StepButton } from '@material-ui/core';
import PropTypes from 'prop-types';



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
}));

const classes = useStyles;
const activeStep = 0;
const setActiveStep = 0;
const steps = 0;
//const steps = getSteps();

const handleNext = () => {
    //setActiveStep(prevActiveStep => prevActiveStep + 1);
    setActiveStep = activeStep+ 1;
};

const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
};

const handleReset = () => {
    setActiveStep(0);
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
        this.state = {
            modalIsOpen: false,
            value: 0,
            flatNoRequired: "dispNone",
            flatNo: "",
            states_listRequired: "dispNone",
            states_list: [],
            localityRequired: "dispNone",
            locality: "",
            cityRequired: "dispNone",
            city: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactRequired: "dispNone",
            contact: "",
            saveAddress: false,
            paymentMethods: [],
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        this.getPaymentMethods();
    }
    /*
    componentDidMount() {
        this.getPaymentMethods();
        
    }*/
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    getPaymentMethods = () => {
        
        let that = this;
        let url = `${constants.paymentMethodUrl}`;
        console.log("In get" + url);
        return fetch(url, {
            method: 'GET',
        }).then((response) => {
            
           console.log("In then"+JSON.stringify(response));
            return response.json();
        }).then((jsonResponse) => {
            //console.log("In then2" + jsonResponse);
            that.setState({
                paymentMethods: jsonResponse.paymentMethods
            });
            console.log("val"+this.state.paymentMethods);
        }).catch((error) => {
            console.log('error user data', error);
        });
    }

    render() {
        //return (<VerticalStepper/>);
        return (
            <Stepper orientation="vertical">
                <Step>
                    <StepLabel>Delivery</StepLabel>
                    <StepContent>
                        <Typography>
                            <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                                <Tab label="EXISTING ADDRESS" />
                                <Tab label="NEW ADDRESS" />
                            </Tabs>
                        </Typography>
                        {this.state.value === 1 &&
                            <TabContainer>
                                <FormControl required>
                                <Input id="flatNo" type="text" placeholder="Flat/Building No." flatNo={this.state.flatNo} onChange={this.inputFlatNoChangeHandler} />
                                    <FormHelperText className={this.state.flatNoRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                <Input id="locality" type="text" placeholder="Locality" locality={this.state.locality} onChange={this.inputLocalityChangeHandler} />
                                <FormHelperText className={this.state.localityRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                <Input id="city" type="text" placeholder="City" city={this.state.city} onChange={this.inputCityChangeHandler} />
                                <FormHelperText className={this.state.cityRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                    </FormControl>
                                <br /><br />
                                <FormControl required>
                                {/*<Select
                                        value={this.state.states_list}
                                        onChange={this.statesChangeHandler}
                                    >
                                    {states_list.map(st => (
                                            <MenuItem key={"state" + st.id} value={st.state}>
                                                {st.state}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    */}
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                <Input id="pincode" type="text" placeholder="Pincode" pincode={this.state.pincode} onChange={this.inputPincodeChangeHandler} />
                                <FormHelperText className={this.state.pincodeRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br /> 
                                {this.state.saveAddress === true &&
                                    <FormControl>
                                        <span className="successText">
                                            Registration Successful. Please Login!
                                      </span>
                                    </FormControl>
                                }
                                <br /><br />
                                <Button variant="contained" color="primary" onClick={this.saveAddressClickHandler}>SAVE ADDRESS</Button>
                        </TabContainer>
                        }
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
                                    {activeStep === steps - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>{/*
                        <div className={classes.actionsContainer}>
                            <StepButton children="Payment" className={classes.button}>NEXT</StepButton>
                            <StepButton children="Back" className={classes.button}>BACK</StepButton>
                        </div>*/}
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
                    </StepContent>
                </Step>
            </Stepper>
            
            );
    }  ;
}

export default Checkout;