import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

const Question = ({ classes, question, options, handleSelectAnswer, answer }) =>
    <div className={classes.root}>
        <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
                aria-label={question}
                name="gender2"
                className={classes.group}
                value={answer}
                onChange={(e) => handleSelectAnswer(e.target.value)}
            >
                {options.map(opt => <FormControlLabel value={opt} control={<Radio />} label={opt} />)}
            </RadioGroup>
            <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
    </div>


Question.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
