import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MouseEventHandler } from 'react'

const StyBotton = styled.botton`
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


const Button = ({ color, text, onClick }) => {
    return (
        <Stybotton onClick={onClick} style={{ backgroundColor: color }}className='btn'>{text}</Stybutton>
    )
}

export default Button