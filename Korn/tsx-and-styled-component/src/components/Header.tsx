import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

type HeaderProps = Readonly<{
    title: string
}>

const Header = ({ title }: HeaderProps) => {
    return (
        <Title>{title}</Title>
    )
}

Header.defaultProps = {
    title: 'My Bank Account Manager',
}

export default Header
