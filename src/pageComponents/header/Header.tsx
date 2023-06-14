import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='dark' fixed='top'>
                <Container>
                    <Navbar.Brand href='#home'>Lord of the Rings</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#game'>Game</Nav.Link>
                        <Nav.Link href='#movies'>Movies</Nav.Link>
                        <Nav.Link href='#characters'>Characters</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header