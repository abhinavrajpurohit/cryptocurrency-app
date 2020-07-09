/**
 |--------------------------------------------------------------
 | NoDataMessage Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import React from 'react';
import { SuccessProps } from '../../types/interfaces';

/**
 * This is a nodatamessage component accepting message as an props and returns view displaying no data found message .
 *
 * @param string success - Success message needs to display
 * @return Return a view displaying success message
 */
const NoDataMessage: React.FC<SuccessProps> = ({ success }) => {
    return (
        <div className = "text-success border-top border-bottom border-success text-center font-weight-bold bg-white p-5 m-5">
            <p>{ success }</p>
        </div>
    );
}

/**
 * Exporting nodatamessage function component
 */
export default NoDataMessage;
