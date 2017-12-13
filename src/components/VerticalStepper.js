import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Question from './Question'

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    resetContainer: {
        marginTop: 0,
        padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
    },
});

function getSteps(questions) {
    return Object.keys(questions).map((objKey, index) => questions[index].question)
}

function getStepContent(step, question, options, handleSelectAnswer, answer, correctAnswer) {
    return <Question
        question={question}
        options={options}
        handleSelectAnswer={handleSelectAnswer}
        answer={answer}
        correctAnswer={correctAnswer}
    />
}
const VerticalLinearStepper = ({ classes, questions, handleSelectAnswer, answer, activeStep, handlePrevStep, handleNextStep }) => {
    const steps = getSteps(questions);

    return <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
                return (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index, questions[`${index}`].question, questions[`${index}`].options, handleSelectAnswer, answer, questions[`${index}`].answer)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handlePrevStep}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        raised
                                        color="primary"
                                        onClick={handleNextStep}
                                        className={classes.button}
                                        disabled={answer !== questions[`${index}`].answer}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                );
            })}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you're finished</Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                </Button>
            </Paper>
        )}
    </div>
}


VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
