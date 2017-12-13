import { connect } from 'react-redux';
import VerticalStepper from '../components/VerticalStepper'
import { handleSelectAnswer } from '../redux/modules/verticalStepper'

function mapStateToProps({app: {questions, answer} }) {
    return {
        questions,
        answer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleSelectAnswer: answer => dispatch(handleSelectAnswer(answer)),
    }; // here we're mapping actions to props
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStepper);
