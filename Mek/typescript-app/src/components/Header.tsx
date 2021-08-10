type HeaderProps = Readonly<{
    title: string
}>

const Header = ({ title }: HeaderProps) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'My Bank Account Manager',
}



export default Header
