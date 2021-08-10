import { MouseEventHandler } from 'react'
import styled from 'styled-components';

const StyButton = styled.button`
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.98);
      }
    &-block {
        display: block;
        width: 100%;
    }
`;

type PropsType = {
    color: string,
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ color, text, onClick }: PropsType) => {
    return (
        <StyButton onClick={onClick} style={{ backgroundColor: color }}>{text}</StyButton>
    )
}

export default Button
