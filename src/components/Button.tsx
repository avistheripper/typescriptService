import * as React from 'react';
interface ButtonPropsType  {
    text: string;
    onClick?: () => void;
    size: string;
    color: string;
}

export const Button = (props: ButtonPropsType): JSX.Element => {
    const { text, onClick, size, color } = props;
    return(
        <button
        onClick={onClick}
        className={`button--${size}--${color}`}
        >
            {text}
        </button>
    );
}