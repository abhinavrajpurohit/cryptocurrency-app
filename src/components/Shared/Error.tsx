/**
 |--------------------------------------------------------------
 | Error Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import React from 'react';
import { ErrorProps } from '../../types/interfaces';

/**
 * This is a error component accepting message as an props and returns view displaying error message .
 *
 * @param string error - Error message needs to display
 * @return Return a view displaying error message
 */
const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className = "alert alert-danger text-center p-5" role = "alert">
            <h4>Oops Error!</h4>
            <p>{ error }</p>
        </div>
    );
}

/**
 * Exporting error function component
 */
export default Error;
