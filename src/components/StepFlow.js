import React,{Component} from "react";
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ScanBatch from'./ScanBatch';

  class StepFlow extends Component{
    /**default state */
    state = {
        finished: false,
        stepIndex: 0,
      };

      handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
    
      getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return <ScanBatch/>;
          case 1:
            return 'What is an ad group anyways?';
          case 2:
            return 'This is the bit I really care about!';
          default:
            return 'You\'re a long way from home sonny jim!';
        }
      }
    
        render(){

            /** initialize default paramaters */
            const {finished, stepIndex} = this.state;
            const contentStyle = {margin: '0 16px'};

            return(
                <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                  <Step>
                    <StepLabel>Create batch to scan</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Train </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Use API</StepLabel>
                  </Step>
                </Stepper>
                <div style={contentStyle}>
                  {finished ? (
                    <p>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          this.setState({stepIndex: 0, finished: false});
                        }}
                      >
                        Click here
                      </a> to reset the example.
                    </p>
                  ) : (
                    <div>
                      <p>{this.getStepContent(stepIndex)}</p>
                      <div style={{marginTop: 12}}>
                        <FlatButton
                          label="Back"
                          disabled={stepIndex === 0}
                          onClick={this.handlePrev}
                          style={{marginRight: 12}}
                        />
                        <RaisedButton
                          label={stepIndex === 2 ? 'Finish' : 'Next'}
                          primary={true}
                          onClick={this.handleNext}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
        }

  }

  export default StepFlow;