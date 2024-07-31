import React from "react";
import '../styles/LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
    return (
        <div className='loading-spinner__overlay'>
            <div className='loading-spinner'></div>
        </div>
    );
};

export default LoadingSpinner;