import React from 'react';

//React.FC -> Function Component Type, recebe parâmetro

interface HeaderProps {
    //title?: string; // '?' significa opcional
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title} E Coleta</h1>
        </header>
    )
}

export default Header