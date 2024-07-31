import React from "react";
import '../styles/Button.css';

type Color = 'blue' | 'red' | 'green';

interface Props {
    children: React.ReactNode;
    color?: Color;
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    color = 'blue',
    size = 'medium'
}) => {
    return (
        <button
            className={`button ${size} ${color}`}
            onClick={ onClick }
        >
            { children }
        </button>
    );
};

export default Button;