import { connect } from 'react-redux';
import VerticalStepper from '../components/VerticalStepper'
import { handleSelectAnswer, handleNextStep, handlePrevStep } from '../redux/modules/verticalStepper'

function mapStateToProps({app: {questions, answer, activeStep} }) {
    return {
        questions,
        answer,
        activeStep,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleSelectAnswer: answer => dispatch(handleSelectAnswer(answer)),
        handleNextStep: answer => dispatch(handleNextStep()),
        handlePrevStep: answer => dispatch(handlePrevStep()),
    }; // here we're mapping actions to props
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStepper);
