/**
 |--------------------------------------------------------------
 | Spinner Component !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import React from 'react';

/**
 * This is a spinner function defination returning spinner template.
 *
 * @return Return a spinner template 
 */
const Spinner: React.SFC = () => { 
    return (
        <div className = "loader text-center">
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className = "spinner-grow text-secondary" role = "status">
                <span className = "sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

/**
 * Exporting spinner component
 */
export default Spinner;
