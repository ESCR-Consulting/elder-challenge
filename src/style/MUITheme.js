import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import orange from 'material-ui/colors/orange';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: orange,
        error: red,
    },
});

export default theme;
