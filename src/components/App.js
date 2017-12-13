import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../style/MUITheme';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import AppBar from './AppBar'
import VerticalStepper from '../containers/verticalStepper'
const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <AppBar/>
                    <VerticalStepper/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
