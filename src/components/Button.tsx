import React from 'react';

type ButtonProps = {
    name : string;
    buttonFunction: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, buttonFunction }) => {
    return(
        <button onClick={buttonFunction} className='bg-red-500 p-2 rounded cursor-pointer'>
            {name}
        </button>
    )
};

export default Button;