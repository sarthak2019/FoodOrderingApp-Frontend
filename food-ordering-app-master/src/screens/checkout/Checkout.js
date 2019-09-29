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
import { StepButton } from '@material-ui/core';
//import StarBorderIcon from '@material-ui/icons/StarBorder';


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
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactRequired: "dispNone",
            contact: "",
            registrationSuccess: false,
            paymentMethods: null,
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    componentDidMount() {
        this.getPaymentMethods();
        
    }
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
            
           // console.log("In then"+response.json().toString());
            return response.json();
        }).then((jsonResponse) => {
            //console.log("In then2" + jsonResponse);
            that.setState({
                paymentMethods: jsonResponse
            });
            console.log(this.state.paymentMethods);
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
                        <FormControl>
                            <FormLabel>Select Mode of Payment</FormLabel>

                            <RadioGroup row>
                                <FormControlLabel value="COD" control={<Radio name="cash" value="COD" />} label="Female" />
                                {/*<Radio id="cod" name="cash" value="COD" checked={false}>COD</Radio>*/}

                            </RadioGroup>
                        </FormControl>
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

                            <RadioGroup id="paymentMethods" name="customized-radios">
                                <Radio id="cod" name="cash" value="COD" checked={false}> COD </Radio>
                            </RadioGroup>
                        </FormControl>
                    </StepContent>
                </Step>
            </Stepper>
            
            );
    }  ;
}

export default Checkout;