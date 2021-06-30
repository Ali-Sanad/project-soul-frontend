import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CreateTherapistProfile from "./therapistProfile-form/CreateTherapistProfile";
import AddTherapistExperience from "./therapistProfile-form/AddTherapistExperience";
import AddTherapistEducation from "./therapistProfile-form/AddTherapistEducation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Create Your Profile", " Add your Education", "Add your Experience"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateTherapistProfile />;
    case 1:
      return <AddTherapistEducation />;
    case 2:
      return <AddTherapistExperience />;
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              {/* All steps completed - you&apos;re finished */}
              All steps completed
              <>
                <div className="mx-auto card rounded-lg mt-2 mb-16 w-8/12">
                  <div className="mx-auto  mt-2 ml-9 w-4/5">
                    <h6 className="mx-auto  mt-2  ml-9 w-4/5">
                      Your information has been added successfully!, Please wait
                      to verify your account.
                    </h6>
                  </div>
                </div>
              </>
              {/* // } */}
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div className="registertherapist__content">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
            <div className="registertherapist__btns">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  // color="primary"
                  onClick={handleSkip}
                  // className={classes.button}
                  className="registertherapist__btns__mainbtn"
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                // color="primary"
                onClick={handleNext}
                // className={classes.button}
                className="registertherapist__btns__mainbtn"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
