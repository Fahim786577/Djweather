import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = props => {

    return (
        <LinearProgress variant="determinate" value={50} style={props.barstyle}/>
    );
}
export default ProgressBar;