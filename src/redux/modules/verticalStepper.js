const SELECT_ANSWER = 'SELECT_ANSWER';
const PREV_STEP = 'PREV_STEP';
const NEXT_STEP = 'NEXT_STEP';
const RESET = 'RESET';

export function handleSelectAnswer(answer){
    return {
        type: SELECT_ANSWER,
        answer
    }
}

export function handlePrevStep(){
    return {
        type: PREV_STEP,
    }
}

export function handleNextStep(){
    return {
        type: NEXT_STEP,
    }
}

export function handleReset(){
    return {
        type: RESET,
    }
}

export const questions = {
    "0": {
        "question": "Which one is correct team name in NBA?",
        "options": [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        "answer": "Huston Rocket"
    },
    "1": {
        "question": "5 + 7 = ?",
        "options": [
            "10",
            "11",
            "12",
            "13"
        ],
        "answer": "12"
    },
    "2": {
        "question": "12 - 8 = ?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "4"
    }
}
const initialState = {
    questions,
    answer: '',
    activeStep: 0
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case SELECT_ANSWER:
            return {
                ...state,
                answer: action.answer
            };
        case PREV_STEP:
            return {
                ...state,
                activeStep: state.activeStep < 1 ? state.activeStep - 1 : 0
            };
        case NEXT_STEP:
            return {
                ...state,
                activeStep: state.activeStep < 4 ? state.activeStep + 1 : 0
            };
        case RESET:
            return {
                ...state,
                activeStep: 0
            };
        default:
            return state;
    }
}
