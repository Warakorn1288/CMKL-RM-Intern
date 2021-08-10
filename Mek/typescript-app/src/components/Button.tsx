import { MouseEventHandler } from 'react'

type PropsType = {
    color: string,
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ color, text, onClick }: PropsType) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}
        className='btn'>
         {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}



export default Button
